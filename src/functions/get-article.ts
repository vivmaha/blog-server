import { createApiHandler } from "../aws/api-gateway/aws-api";
import { Article } from "../model/article";
import { getArticleSummary } from "../tables/articles-table";
import { getArticleContent } from "../buckets/default-bucket";
import { APIGatewayProxyEvent } from "aws-lambda";

type GetArticleResult = {
  article: Article;
};

export const handler = createApiHandler(
  async (event: APIGatewayProxyEvent): Promise<GetArticleResult> => {
    console.log(`event = [${JSON.stringify(event)}].`);
    if (event.pathParameters === null) {
      throw new Error("pathParameters is missing.");
    }
    const id = event.pathParameters.id;
    if (id === undefined) {
      throw new Error("event.pathParameters.id is missing");
    }
    const [summary, content] = await Promise.all([
      getArticleSummary(id),
      getArticleContent(id),
    ]);
    return {
      article: {
        ...summary,
        content,
      },
    };
  }
);
