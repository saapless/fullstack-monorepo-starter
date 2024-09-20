import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const MainHandler: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};

export const main = MainHandler;
