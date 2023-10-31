import { LayoutProps } from "$fresh/server.ts";

export default ({ Component }: LayoutProps) => {
  return (
    <div class="sm:mx-auto sm:w-[650px] mt-10 text-gray-900 min-h-screen pb-5 sm:pb-3">
      <Component />
    </div>
  );
};
