import { RouteContext } from "$fresh/server.ts";

export default async (_req: Request, ctx: RouteContext) => {
  const channelId = ctx.params.id;

  return (
    <div>
      Transcript for channel {channelId}
    </div>
  );
};
