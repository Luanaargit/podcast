import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const response = await serviceListEpisodes();

  res.writeHead(response.statusCode, {
    "Content-Type": ContentType.JSON,
  });

  res.end(JSON.stringify(response.body));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const url = req.url || "";
  const podcastName = url.split("podcastName=")[1];

  const response = await serviceFilterEpisodes(podcastName);

  res.writeHead(response.statusCode, {
    "Content-Type": ContentType.JSON,
  });

  res.end(JSON.stringify(response.body));
};