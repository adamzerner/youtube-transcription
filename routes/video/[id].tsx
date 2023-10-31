import { RouteContext } from "$fresh/server.ts";
import { YoutubeTranscript } from "npm:youtube-transcript";

export default async (_req: Request, ctx: RouteContext) => {
  // WlluO225q0k (real video ID)
  const videoId = ctx.params.id;

  try {
    const response = await YoutubeTranscript.fetchTranscript(videoId);
    const transcript = response.map((segment) => segment.text).join(" ");

    return (
      <div>
        <div>
          Transcript for video with ID of{" "}
          <span class="font-bold">{videoId}</span>:
        </div>
        <div class="mt-6">{transcript}</div>
      </div>
    );
  } catch (e) {
    return (
      <div>
        Unable to fetch transcript of video with ID of{" "}
        <span class="font-bold">
          {videoId}
        </span>.
      </div>
    );
  }
};
