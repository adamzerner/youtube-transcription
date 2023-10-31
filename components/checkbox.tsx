import type { JSX } from "preact";

export const Checkbox = (
  { ...rest }: JSX.HTMLAttributes<HTMLInputElement>,
) => {
  let className = "";

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <label class="custom-checkbox-container">
      <input
        {...rest}
        type="checkbox"
        class={className}
      />
      <span class="checkmark"></span>
    </label>
  );
};
