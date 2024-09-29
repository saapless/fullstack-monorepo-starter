/* eslint-disable @typescript-eslint/no-explicit-any */

import { APIGatewayProxyEventV2 } from "aws-lambda";
import { MainHandler } from "../src/lambda/main/handler";

describe("core api tests", () => {
  it("run tests", async () => {
    const response = await MainHandler({} as APIGatewayProxyEventV2, null as any, null as any);
    expect(response).toBeInstanceOf(Object);
  });
});
