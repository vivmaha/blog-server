import { ArticleSummary } from "../src/model/article-summary";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

/**
 * Pushes some sample articles to the stack
 */
(async () => {
  const articles: ArticleSummary[] = [
    {
      title: "Search Engine Optimization",
      date: "2015-11-25T08:00:00.000Z",
      id: "search-engine-optimization-101",
      preview:
        "Search engine optimization (SEO) is now a critical ingredient of website design. This post summarizes a paper that discusses a broad range of SEO techniques.",
    },
    {
      title: "Information Architecture",
      date: "2015-12-25T08:00:00.000Z",
      id: "information-architecture-101",
      preview:
        "Information Architecture (IA) is focused on making information findable and  understandable. This note summarizes the first few chapters of a book on this topic.",
    },
    {
      title: "Cultural Awareness",
      date: "2016-10-08T07:00:00.000Z",
      id: "cultural-awareness",
      preview:
        "Global design demands cultural awareness. In this article, I look at techniques for developing cultural awareness.",
    },
    {
      title: "How Culture Became Part of UX",
      date: "2016-10-16T07:00:00.000Z",
      id: "how-culture-became-part-of-ux",
      preview:
        "Experiences in the field have proven that culture is a key factor of UX. In this article we look at one such example, and how the field of UX has evolved to incorporate culture.",
    },
    {
      title: "Global Design",
      date: "2016-10-22T07:00:00.000Z",
      id: "global-design",
      preview:
        "Great global user research does not automatically translate into a successful product. Design and engineering processes must also be globally-oriented so that they can address any cultural issues that arise.",
    },
    {
      title: "Global User Research",
      date: "2016-11-06T07:00:00.000Z",
      id: "global-user-research",
      preview:
        "Global User Research is hard. In this post, we look at tips from seasoned veterans for conducting an insightful global user study, and delivering compelling results to the product team.",
    },
    {
      title: "Language and Power",
      date: "2016-11-13T08:00:00.000Z",
      id: "language-power",
      preview:
        "Localization and translation are standard for global products. This post explores power dynamics between languages that translators should be mindful of.",
    },
    {
      title: "Design for Emerging Economies",
      date: "2016-11-19T08:00:00.000Z",
      id: "developing-for-emerging-economies",
      preview:
        "Companies are increasingly expanding into untapped markets of emerging economies. This post reflects on the successes and failures of a few of these endeavours.",
    },
    {
      title: "Cross-Cultural Teams",
      date: "2016-11-25T08:00:00.000Z",
      id: "cross-cultural-teams",
      preview:
        "Working on a global product is usually accompanied with a global workforce. This post explores the dynamics of diverse work spaces.",
    },
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
