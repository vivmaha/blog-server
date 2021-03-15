import { Article } from "../src/model/article";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

/**
 * Pushes some sample articles to the stack
 */
(async () => {
  const articles: Article[] = [
    { id: "search-engine-optimization-101", date: "2015-11-25T08:00:00.000Z" },
    { id: "information-architecture-101", date: "2015-12-25T08:00:00.000Z" },
    { id: "cultural-awareness", date: "2016-10-08T07:00:00.000Z" },
    { id: "how-culture-became-part-of-ux", date: "2016-10-16T07:00:00.000Z" },
    { id: "global-design", date: "2016-10-22T07:00:00.000Z" },
    { id: "global-user-research", date: "2016-11-06T07:00:00.000Z" },
    { id: "language-power", date: "2016-11-13T08:00:00.000Z" },
    {
      id: "developing-for-emerging-economies",
      date: "2016-11-19T08:00:00.000Z",
    },
    { id: "cross-cultural-teams", date: "2016-11-25T08:00:00.000Z" },
  ];

  const config = {
    // You'll have to change this to your table's name.
    tableName: "blog-dev-ArticlesTable-11UL8NKR2FBNQ",
    region: "us-west-2",
  };

  const client = new DynamoDBClient({ region: config.region });
  await Promise.all(
    articles.map((article) =>
      client.send(
        new PutItemCommand({
          Item: marshall(article),
          TableName: config.tableName,
        })
      )
    )
  );
})().then(
  () => console.log("done"),
  (e) => console.log(e)
);
