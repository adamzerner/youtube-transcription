import { Checkbox } from "./checkbox.tsx";
import type { JSX } from "preact";

export const Input = (
  { label, inputProps = {}, helpText }: {
    label: string;
    inputProps?: JSX.HTMLAttributes<HTMLInputElement>;
    helpText?: string;
  },
) => {
  return (
    <div>
      <label class="block">{label}</label>
      {helpText &&
        <div class="mb-1 text-sm text-neutral-500">{helpText}</div>}
      {inputProps.type === "checkbox" ? <Checkbox {...inputProps} /> : (
        <input
          {...inputProps}
          class={`p-2 border-1 border-neutral-200 rounded-md h-14 w-full sm:h-auto mt-3 sm:mt-auto ${
            inputProps.class ? inputProps.class : ""
          }`}
        />
      )}
    </div>
  );
};
