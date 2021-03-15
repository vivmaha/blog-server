import { Series } from "../model/series";
import { getItem, putItem } from "./table";

const envKeys = { tableName: "SERIES_TABLE_NAME" };

const getKey = (id: string) => ({ id });

export const getSeries = (id: string): Promise<Series> =>
  getItem(envKeys, getKey(id));

export const putSeries = (series: Series): Promise<void> =>
  putItem(envKeys, series);
