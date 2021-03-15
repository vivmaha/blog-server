import { ArticleSummary } from "../src/model/article-summary";
import { putArticleContent } from "../src/buckets/default-bucket";
import { articleContents } from "./article-contents";
import { putArticleSummary } from "../src/tables/articles-table";
import { Series } from "../src/model/series";
import { putSeries } from "../src/tables/series-table";

/**
 * Replace these with the values from your stack.
 *
 * As long as I manually deploy to prod, don't check-in prod values here, since
 * that'll make it way to easy to accidentally overwrite prod.
 **/
process.env["DEFAULT_BUCKET_NAME"] = "blog-dev-defaultbucket-19jwyl91pofzb";
process.env["AWS_REGION"] = "us-west-2";
process.env["ARTICLES_TABLE_NAME"] = "blog-dev-ArticlesTable-11UL8NKR2FBNQ";
process.env["SERIES_TABLE_NAME"] = "blog-dev-SeriesTable-13HGG8FMK47VB";

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
      series: {
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
      series: {
        id: "global-ux",
        title: "Global UX",
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
      series: {
        id: "global-ux",
        title: "Global UX",
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
      series: {
        id: "global-ux",
        title: "Global UX",
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
      series: {
        id: "global-ux",
        title: "Global UX",
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
      series: {
        id: "global-ux",
        title: "Global UX",
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
      series: {
        id: "global-ux",
        title: "Global UX",
      },
      preview:
        "Working on a global product is usually accompanied with a global workforce. This post explores the dynamics of diverse work spaces.",
    },
    {
      id: "about",
      title: "About",
      date: "2017-09-25T08:00:00.000Z",
      preview: "",
      isHidden: true,
    },
  ];

  const getArticlesFromIds = (ids: string[]) =>
    ids.map((id) => {
      const article = articles.find((a) => a.id === id);
      if (article === undefined) {
        throw new Error(`Article not found. Id = [${id}].`);
      }
      return article;
    });

  const series: Series[] = [
    {
      id: "global-ux",
      title: "Global UX",
      backgroundImageUrl:
        "https://notesbyvmedia.blob.core.windows.net/images/car-on-map-web-optimized.jpg",
      introduction: `A literature review.\n\nThis was part of my coursework at the University of Washington. Specifically, HCDE 512 with Manuela Noske.`,
      articles: getArticlesFromIds([
        "cultural-awareness",
        "how-culture-became-part-of-ux",
        "global-design",
        "global-user-research",
        "language-power",
        "developing-for-emerging-economies",
        "cross-cultural-teams",
      ]),
    },
    {
      id: "home",
      title: "Notes by V",
      backgroundImageUrl:
        "https://notesbyvmedia.blob.core.windows.net/images/pen-idea-bulb-paper-web-optimized.jpg",
      introduction: "A place to store my notes.",
      articles: getArticlesFromIds([
        "cross-cultural-teams",
        "developing-for-emerging-economies",
        "language-power",
        "global-user-research",
        "global-design",
        "how-culture-became-part-of-ux",
        "cultural-awareness",
        "information-architecture-101",
        "search-engine-optimization-101",
      ]),
    },
  ];

  await Promise.all([
    Promise.all(
      articles.map((article) =>
        Promise.all([
          putArticleSummary(article),
          putArticleContent(
            article.id,
            JSON.stringify(articleContents.get(article.id), null, 2)
          ),
        ])
      )
    ),
    Promise.all(series.map(putSeries)),
  ]);
})().then(
  () => console.log("done"),
  (e) => console.log(e)
);
