import { ArticleSummary } from "./article-summary";

export type Series = {
  title: string;
  id: string;
  introduction: string;
  articles: ArticleSummary[];
};
