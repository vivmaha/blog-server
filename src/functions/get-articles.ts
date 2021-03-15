import { ArticleSummary } from "../model/article-summary";
import { createApiHandler } from "../aws/api-gateway/aws-api";
import { getArticles } from "../tables/articles-table";

type GetArticlesResult = {
  articles: ArticleSummary[];
};

export const handler = createApiHandler(
  async (): Promise<GetArticlesResult> => {
    const articles = await getArticles();
    return { articles };
  }
);
