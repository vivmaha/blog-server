import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import createHttpError from "http-errors";
import { getEnvironmentVariable } from "../node/environment";

export const getItem = async <TKey, TItem>(
  envKeys: { tableName: string },
  key: TKey
): Promise<TItem> => {
  const tableName = getEnvironmentVariable(envKeys.tableName);
  const result = await new DynamoDBClient({}).send(
    new GetItemCommand({
      TableName: tableName,
      Key: marshall(key),
    })
  );
  if (result.Item === undefined) {
    const errorMessage = JSON.stringify({
      tableName,
      key,
    });
    throw new createHttpError.NotFound(errorMessage);
  }
  return unmarshall(result.Item) as TItem;
};

export const putItem = async <TItem>(
  envKeys: { tableName: string },
  item: TItem
): Promise<void> => {
  const tableName = getEnvironmentVariable(envKeys.tableName);
  await new DynamoDBClient({}).send(
    new PutItemCommand({
      TableName: tableName,
      Item: marshall(item),
    })
  );
};
