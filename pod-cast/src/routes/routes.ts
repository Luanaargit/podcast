import { getListEpisodes, getFilterEpisodes } from "../controllers/podcasts-controller";
import { HttpMethod } from "../utils/http-methods";

export const Routes = {
  LIST: "/list",
  EPISODE: "/episode",
};

export const routes = async (req, res) => {
  const baseUrl = req.url?.split("?")[0];

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    return await getListEpisodes(req, res);
  }

  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    return await getFilterEpisodes(req, res);
  }

  res.writeHead(404);
  res.end("Route not found");
};