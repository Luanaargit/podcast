import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  const data = await repositoryPodcast();

  const grouped = data.reduce((acc, episode) => {
    episode.categories.forEach((category) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(episode);
    });

    return acc;
  }, {} as Record<string, any[]>);

  const formatted = Object.keys(grouped).map((category) => ({
    category,
    episodes: grouped[category],
  }));

  return {
    statusCode: formatted.length ? StatusCode.OK : StatusCode.NoContent,
    body: formatted,
  };
};