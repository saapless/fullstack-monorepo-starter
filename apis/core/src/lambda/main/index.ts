import { handlerPath } from "@pkg/libs/handlerPath";

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
