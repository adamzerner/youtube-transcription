import { Handlers } from "$fresh/server.ts";
import { redirect } from "../../utilities/redirect.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const form = await req.formData();
    const channelId = form.get("channel-id")?.toString();

    return redirect(`/channel/${channelId}`);
  },
};
