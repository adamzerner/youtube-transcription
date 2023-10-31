import { Button } from "../components/Button.tsx";
import { Input } from "../components/input.tsx";

export default () => {
  return (
    <div>
      <form class="flex flex-col gap-3">
        <Input label="Channel ID" />
        <Button kind="secondary">Get transcripts</Button>
      </form>
    </div>
  );
};
