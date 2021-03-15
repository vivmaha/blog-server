import { ArticleSummary } from "./article-summary";

export type Article = ArticleSummary & {
  content: string;
};
