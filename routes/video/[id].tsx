import { RouteContext } from "$fresh/server.ts";

export default async (_req: Request, ctx: RouteContext) => {
  const videoId = ctx.params.id;

  return (
    <div>
      Transcript for video {videoId}
    </div>
  );
};
