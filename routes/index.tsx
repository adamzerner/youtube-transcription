import { Button } from "../components/Button.tsx";
import { Input } from "../components/input.tsx";

export default () => {
  return (
    <div>
      <form
        class="flex flex-col gap-3"
        method="post"
        action="/api/get-channel-transcripts"
      >
        <Input label="Channel ID" inputProps={{ name: "channel-id" }} />
        <Button kind="secondary">Get transcripts</Button>
      </form>
      <div class="my-14 text-center text-gray-400">or</div>
      <form
        class="flex flex-col gap-3"
        method="post"
        action="/api/get-video-transcript"
      >
        <Input label="Video ID" inputProps={{ name: "video-id" }} />
        <Button kind="secondary">Get transcript</Button>
      </form>
    </div>
  );
};
