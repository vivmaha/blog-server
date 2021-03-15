import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { Article } from "../model/article";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { createApiHandler } from "../aws/api-gateway/aws-api";

const getEnvironmentVariable = (key: string) => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable is missing: [${key}].`);
  }
  return value;
};

type GetArticlesResult = {
  articles: Article[];
};

export const handler = createApiHandler(
  async (): Promise<GetArticlesResult> => {
    const queryResult = await new DynamoDBClient({}).send(
      // Scans are bad, but my article list is tiny it isn't worth it
      // to address this.
      new ScanCommand({
        TableName: getEnvironmentVariable("ARTICLES_TABLE_NAME"),
      })
    );
    if (queryResult.Items === undefined) {
      throw new Error("queryResult.Items === undefined");
    }
    if (queryResult.LastEvaluatedKey !== undefined) {
      throw new Error(
        "I didn't anticipate the table getting this large. Time for pagination."
      );
    }
    return {
      articles: queryResult.Items.map((item) => unmarshall(item) as Article),
    };
  }
);
