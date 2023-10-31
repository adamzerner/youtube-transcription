/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

await start(manifest, config);

// import { YoutubeTranscript } from "npm:youtube-transcript";

// if (Deno.args.length === 0) {
//   console.log(
//     "Please include a video id like so: deno run index.ts WlluO225q0k",
//   );
// } else {
//   const response = await YoutubeTranscript.fetchTranscript(Deno.args[0]);
//   const transcript = response.map((segment) => segment.text).join(" ");

//   console.log(transcript);
// }
