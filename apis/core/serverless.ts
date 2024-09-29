import type { AWS } from "@serverless/typescript";

import main from "./src/lambda/main";

export default {
  // "org" ensures this Service is used with the correct Serverless Framework Access Key.
  // org: "",
  // "service" is the name of this project. This will also be added to your AWS resource names.
  service: "core-api",
  provider: {
    name: "aws",
    runtime: "nodejs20.x",
    region: "${env:REGION, 'us-east-1'}" as AWS["provider"]["region"],
    stage: "${env:STAGE, 'dev'}",
    memorySize: 512,
    timeout: 30,
    logRetentionInDays: 14,
    deploymentMethod: "direct",
    tracing: {
      lambda: true,
      apiGateway: true,
    },
    httpApi: {
      shouldStartNameWithService: true,
      cors: true,
    },
  },
  useDotenv: true,
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  functions: {
    Main: main,
  },
  resources: {
    Resources: {},
  },
  plugins: ["serverless-iam-roles-per-function", "serverless-offline"],
  custom: {
    "serverless-offline": {
      httpPort: 4000,
    },
  },
} satisfies AWS;
