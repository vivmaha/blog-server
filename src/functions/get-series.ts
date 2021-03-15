import { createApiHandler } from "../aws/api-gateway/aws-api";
import { APIGatewayProxyEvent } from "aws-lambda";
import { Series } from "../model/series";
import { getSeries } from "../tables/series-table";

type GetSeriesResult = {
  series: Series;
};

export const handler = createApiHandler(
  async (event: APIGatewayProxyEvent): Promise<GetSeriesResult> => {
    if (event.pathParameters === null) {
      throw new Error("pathParameters is missing.");
    }
    const id = event.pathParameters.id;
    if (id === undefined) {
      throw new Error("event.pathParameters.id is missing");
    }
    const series = await getSeries(id);

    return { series };
  }
);
