import type { AWS } from "@serverless/typescript";

export default {
  // "org" ensures this Service is used with the correct Serverless Framework Access Key.
  // org: "",
  // "service" is the name of this project. This will also be added to your AWS resource names.
  service: "web-app",
  provider: {
    name: "aws",
    region: "${env:REGION, 'us-east-1'}" as AWS["provider"]["region"],
    stage: "${env:STAGE, 'dev'}",
  },
  resources: {
    Resources: {
      AmplifyAppRole: {
        Type: "AWS::IAM::Role",
        Properties: {
          AssumeRolePolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Principal: {
                  Service: ["amplify.amazonaws.com"],
                },
                Action: ["sts:AssumeRole"],
              },
            ],
          },
          Policies: [
            {
              PolicyName: "web-app-policy-${sls:stage}",
              PolicyDocument: {
                Version: "2012-10-17",
                Statement: [
                  {
                    Sid: "PushLogs",
                    Effect: "Allow",
                    Action: ["logs:CreateLogStream", "logs:PutLogEvents"],
                    Resource: {
                      "Fn::Sub":
                        "arn:aws:logs:${AWS::Region}:${AWS::AccountId}:log-group:/aws/amplify/*:log-stream:*",
                    },
                  },
                  {
                    Sid: "CreateLogGroup",
                    Effect: "Allow",
                    Action: "logs:CreateLogGroup",
                    Resource: {
                      "Fn::Sub":
                        "arn:aws:logs:${AWS::Region}:${AWS::AccountId}:log-group:/aws/amplify/*",
                    },
                  },
                  {
                    Sid: "DescribeLogGroups",
                    Effect: "Allow",
                    Action: "logs:DescribeLogGroups",
                    Resource: {
                      "Fn::Sub": "arn:aws:logs:${AWS::Region}:${AWS::AccountId}:log-group:*",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      AmplifyApp: {
        Type: "AWS::Amplify::App",
        Properties: {
          Name: "web-app-${sls:stage}",
          Repository: "${env:REPOSITORY}",
          AccessToken: "${env:GITHUB_TOKEN}",
          EnableBranchAutoDeletion: true,
          IAMServiceRole: { "Fn::GetAtt": ["AmplifyAppRole", "Arn"] },
          Platform: "WEB_COMPUTE",
          EnvironmentVariables: [
            {
              Name: "AMPLIFY_MONOREPO_APP_ROOT",
              Value: "apps/web",
            },
            {
              Name: "AMPLIFY_DIFF_DEPLOY",
              Value: "true",
            },
            {
              Name: "AMPLIFY_DIFF_DEPLOY_ROOT",
              Value: "apps/web",
            },
          ],
        },
      },
      AmplifyAppBranch: {
        Type: "AWS::Amplify::Branch",
        Properties: {
          AppId: { Ref: "AmplifyApp" },
          BranchName: "${env:BRANCH}",
          EnableAutoBuild: true,
          EnvironmentVariables: [
            {
              Name: "REACT_APP_STAGE",
              Value: "${sls:stage}",
            },
          ],
        },
      },
      // AmplifyDomain: {
      //   Type: "AWS::Amplify::Domain",
      //   Properties: {
      //     AppId: { Ref: "AmplifyApp" },
      //   },
      // },
    },
    Outputs: {
      DomainUrl: {
        Value: { "Fn::Sub": "https://${AmplifyApp.DefaultDomain}" },
      },
      AppId: {
        Value: { Ref: "AmplifyApp" },
      },
    },
  },
} satisfies AWS;
