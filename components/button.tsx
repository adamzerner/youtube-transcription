import type { JSX } from "preact";
import { ComponentChild } from "preact";

export const Button = (
  { kind, block = false, children, ...rest }: {
    kind: "primary" | "secondary" | "tertiary";
    block?: boolean;
    children: ComponentChild;
  } & JSX.HTMLAttributes<HTMLButtonElement>,
) => {
  let className = "h-14 sm:h-auto px-3 py-1";

  className += kind === "primary"
    ? " bg-gray-500 text-gray-50 rounded-md hover:bg-gray-400"
    : kind === "secondary"
    ? " border-1 border-gray-500 rounded-md hover:bg-gray-100"
    : " underline";

  if (block) {
    className += " block py-2 px-5";
  }

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <button {...rest} class={className}>
      {children}
    </button>
  );
};
