import { ArticleSummary } from "../src/model/article-summary";
import { putArticleContent } from "../src/buckets/default-bucket";
import { articleContents } from "./article-contents";
import { putArticleSummary } from "../src/tables/articles-table";

// Replace these with the values from your stack.
process.env["DEFAULT_BUCKET_NAME"] = "blog-dev-defaultbucket-19jwyl91pofzb";
process.env["AWS_REGION"] = "us-west-2";
process.env["ARTICLES_TABLE_NAME"] = "blog-dev-ArticlesTable-11UL8NKR2FBNQ";

/**
 * Pushes some sample articles to the stack
 */
(async () => {
  const articles: ArticleSummary[] = [
    {
      id: "search-engine-optimization-101",
      title: "Search Engine Optimization",
      date: "2015-11-25T08:00:00.000Z",
      preview:
        "Search engine optimization (SEO) is now a critical ingredient of website design. This post summarizes a paper that discusses a broad range of SEO techniques.",
    },
    {
      id: "information-architecture-101",
      title: "Information Architecture",
      date: "2015-12-25T08:00:00.000Z",
      preview:
        "Information Architecture (IA) is focused on making information findable and  understandable. This note summarizes the first few chapters of a book on this topic.",
    },
    {
      id: "cultural-awareness",
      title: "Cultural Awareness",
      date: "2016-10-08T07:00:00.000Z",
      articleSet: {
        id: "global-ux",
        title: "Global UX",
        nextArticle: {
          id: "how-culture-became-part-of-ux",
          title: "How Culture Became Part of UX",
        },
      },
      preview:
        "Global design demands cultural awareness. In this article, I look at techniques for developing cultural awareness.",
    },
    {
      id: "how-culture-became-part-of-ux",
      title: "How Culture Became Part of UX",
      date: "2016-10-16T07:00:00.000Z",
      articleSet: {
        id: "global-ux",
        title: "Global UX",
        previousArticle: {
          id: "cultural-awareness",
          title: "Cultural Awareness",
        },
        nextArticle: {
          id: "global-design",
          title: "Global Design",
        },
      },
      preview:
        "Experiences in the field have proven that culture is a key factor of UX. In this article we look at one such example, and how the field of UX has evolved to incorporate culture.",
    },
    {
      id: "global-design",
      title: "Global Design",
      date: "2016-10-22T07:00:00.000Z",
      articleSet: {
        id: "global-ux",
        title: "Global UX",
        previousArticle: {
          id: "how-culture-became-part-of-ux",
          title: "How Culture Became Part of UX",
        },
        nextArticle: {
          id: "global-user-research",
          title: "Global User Research",
        },
      },
      preview:
        "Great global user research does not automatically translate into a successful product. Design and engineering processes must also be globally-oriented so that they can address any cultural issues that arise.",
    },
    {
      id: "global-user-research",
      title: "Global User Research",
      date: "2016-11-06T07:00:00.000Z",
      articleSet: {
        id: "global-ux",
        title: "Global UX",
        previousArticle: {
          id: "global-design",
          title: "Global Design",
        },
        nextArticle: {
          id: "language-power",
          title: "Language and Power",
        },
      },
      preview:
        "Global User Research is hard. In this post, we look at tips from seasoned veterans for conducting an insightful global user study, and delivering compelling results to the product team.",
    },
    {
      id: "language-power",
      title: "Language and Power",
      date: "2016-11-13T08:00:00.000Z",
      articleSet: {
        id: "global-ux",
        title: "Global UX",
        previousArticle: {
          id: "global-user-research",
          title: "Global User Research",
        },
        nextArticle: {
          id: "developing-for-emerging-economies",
          title: "Design for Emerging Economies",
        },
      },
      preview:
        "Localization and translation are standard for global products. This post explores power dynamics between languages that translators should be mindful of.",
    },
    {
      id: "developing-for-emerging-economies",
      title: "Design for Emerging Economies",
      date: "2016-11-19T08:00:00.000Z",
      articleSet: {
        id: "global-ux",
        title: "Global UX",
        previousArticle: {
          id: "language-power",
          title: "Language and Power",
        },
        nextArticle: {
          id: "cross-cultural-teams",
          title: "Cross-Cultural Teams",
        },
      },
      preview:
        "Companies are increasingly expanding into untapped markets of emerging economies. This post reflects on the successes and failures of a few of these endeavours.",
    },
    {
      id: "cross-cultural-teams",
      title: "Cross-Cultural Teams",
      date: "2016-11-25T08:00:00.000Z",
      articleSet: {
        id: "global-ux",
        title: "Global UX",
        previousArticle: {
          id: "developing-for-emerging-economies",
          title: "Design for Emerging Economies",
        },
      },
      preview:
        "Working on a global product is usually accompanied with a global workforce. This post explores the dynamics of diverse work spaces.",
    },
  ];

  await Promise.all(
    articles.map((article) =>
      Promise.all([
        putArticleSummary(article),
        putArticleContent(
          article.id,
          JSON.stringify(articleContents.get(article.id), null, 2)
        ),
      ])
    )
  );
})().then(
  () => console.log("done"),
  (e) => console.log(e)
);
