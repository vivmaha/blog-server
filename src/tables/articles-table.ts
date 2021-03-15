import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { ArticleSummary } from "../model/article-summary";
import { getEnvironmentVariable } from "../node/environment";

const getTableName = () => getEnvironmentVariable("ARTICLES_TABLE_NAME");

const getKey = (id: string) => marshall({ id });

export const getArticles = async (): Promise<ArticleSummary[]> => {
  const result = await new DynamoDBClient({}).send(
    // Scans are bad, but my article list is tiny it isn't worth it
    // to address this.
    new ScanCommand({
      TableName: getTableName(),
      FilterExpression: "attribute_not_exists(isHidden)",
    })
  );
  if (result.Items === undefined) {
    throw new Error("queryResult.Items === undefined");
  }
  if (result.LastEvaluatedKey !== undefined) {
    throw new Error(
      "I didn't anticipate the table getting this large. Time for pagination."
    );
  }
  return result.Items.map(
    (item) => unmarshall(item) as ArticleSummary
  ).sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getArticleSummary = async (
  id: string
): Promise<ArticleSummary> => {
  const result = await new DynamoDBClient({}).send(
    new GetItemCommand({
      TableName: getTableName(),
      Key: getKey(id),
    })
  );
  if (result.Item === undefined) {
    throw new Error("queryResult.Item === undefined");
  }
  return unmarshall(result.Item) as ArticleSummary;
};

export const putArticleSummary = async (
  articleSummary: ArticleSummary
): Promise<void> => {
  await new DynamoDBClient({}).send(
    new PutItemCommand({
      TableName: getTableName(),
      Item: marshall(articleSummary),
    })
  );
};
