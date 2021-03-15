import { ArticleSummary } from "./article-summary";

export type Series = {
  title: string;
  id: string;
  backgroundImageUrl: string;
  introduction: string;
  articles: ArticleSummary[];
};
