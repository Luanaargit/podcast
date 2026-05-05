import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName?: string
): Promise<PodcastTransferModel> => {
  const data = await repositoryPodcast();

  const filtered = podcastName
    ? data.filter(
        (episode) =>
          episode.podcastName.toLowerCase() === podcastName.toLowerCase()
      )
    : [];

  return {
    statusCode: filtered.length ? StatusCode.OK : StatusCode.NoContent,
    body: filtered,
  };
};