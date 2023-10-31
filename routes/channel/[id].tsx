// deno-lint-ignore-file no-explicit-any
import { RouteContext } from "$fresh/server.ts";
import { YoutubeTranscript } from "npm:youtube-transcript";

// To get more than 50 results: https://stackoverflow.com/questions/18953499/youtube-api-to-fetch-all-videos-on-a-channel#comment39452840_20795628

export default async (_req: Request, ctx: RouteContext) => {
  //https://stackoverflow.com/a/36387404/1927876
  // GoogleDevelopers (real channel ID)
  const youtubeApiKey = Deno.env.get("YOUTUBE_API_KEY");
  const channelId = ctx.params.id;

  const uploadsResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?forUsername=${channelId}&key=${youtubeApiKey}&part=contentDetails`,
  );

  if (!uploadsResponse.ok) {
    throw new Error("Error fetching uploads");
  }

  const uploadsJson = await uploadsResponse.json();
  const playlistId =
    uploadsJson.items[0].contentDetails.relatedPlaylists.uploads;

  const playlistItemsResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${youtubeApiKey}&part=snippet&maxResults=100000`,
  );

  if (!playlistItemsResponse.ok) {
    throw new Error("Error fetching uploads");
  }

  const playlistItemsJson = await playlistItemsResponse.json();
  const videos = playlistItemsJson.items.map((
    v: any,
  ) => ({
    id: v.snippet.resourceId.videoId,
    title: v.snippet.title,
  }));
  const transcriptPromises = videos.map((v: any) =>
    YoutubeTranscript.fetchTranscript(v.id)
  );
  const transcripts = await Promise.all(transcriptPromises);
  const videosWithTranscripts = videos.map((v: any, i: number) => ({
    ...v,
    transcript: transcripts[i].map((segment: any) => segment.text).join(" "),
  }));

  return (
    <div>
      <div class="text-3xl mb-12">
        Transcripts for channel with ID of{" "}
        <span class="font-bold">{channelId}</span>:
      </div>
      {videosWithTranscripts.map((v: any, i: number) => (
        <div class="mb-12">
          <div class="text-lg mb-4 font-bold">
            {i + 1}: {v.title} <span class="text-gray-500">({v.id})</span>
          </div>
          <div>{v.transcript}</div>
        </div>
      ))}
    </div>
  );
};
