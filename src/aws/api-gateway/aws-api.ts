import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";
import { APIGatewayProxyResult, Handler } from "aws-lambda";

export const createApiHandler = <TEvent, TResult>(
  handler: (event: TEvent) => Promise<TResult>
): Handler<TEvent, APIGatewayProxyResult> => {
  return middy(async (event: TEvent) => {
    const responseBody = await handler(event);
    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(responseBody),
    });
  }).use(httpErrorHandler());
};
