import { handlerPath } from "../../../../packages/libs/handlerPath";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      httpApi: "GET /",
    },
  ],
  environment: {},
  iamRoleStatements: [],
};
