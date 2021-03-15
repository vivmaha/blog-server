import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";
import cors from "@middy/http-cors";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";

export const createApiHandler = <TResult>(
  handler: (event: APIGatewayProxyEvent) => Promise<TResult>
): Handler<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  return middy(async (event: APIGatewayProxyEvent) => {
    const responseBody = await handler(event);
    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(responseBody),
    });
  })
    .use(httpErrorHandler())
    .use(cors());
};
