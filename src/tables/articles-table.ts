import { ArticleSummary } from "../model/article-summary";
import { getItem, putItem } from "./table";

const envKeys = { tableName: "ARTICLES_TABLE_NAME" };

const getKey = (id: string) => ({ id });

export const getArticleSummary = (id: string): Promise<ArticleSummary> =>
  getItem(envKeys, getKey(id));

export const putArticleSummary = async (
  articleSummary: ArticleSummary
): Promise<void> => putItem(envKeys, articleSummary);
