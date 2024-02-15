"use client";

import {SearchIcon} from "lucide-react";
import {type ChangeEvent, type InputHTMLAttributes, type KeyboardEvent} from "react";
import type {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";
import {cn} from "../lib/utils";

/**
 * Type for input field properties.
 * @template IP - The type of form field values.
 */
type InputProps<IP extends FieldValues = UniversalT> = {
  label: string; // The label for the input field.
  errors: FieldErrors<IP>; // The errors associated with the input field.
  customError: string | null; // Custom error message for the input field.
  labelclassName: string; // The class name for the label.
  isRequired: boolean; // Indicates if the input field is required.
  isCustomIconDisabled: boolean; // Indicates if the custom icon is disabled.
  withSearchIcon: boolean; // Indicates if the search icon is enabled.
  customIcon: React.JSX.Element; // The custom icon for the input field.
  inputChildren: () => React.JSX.Element; // The child elements for the input field component.
  searchIconSize: number; // The size of the search icon.
  onClickCustomIcon(): void; // The function to handle custom icon click event.
  typeFlex: "column" | "row"; // The flex layout type for the input field.
  withErrorIcon: boolean; // Indicates if the error icon is enabled.
  name: keyof IP; // The name of the input field.
  withEyeIcon: boolean; // Indicates if the eye icon is enabled.
  register: UseFormRegister<IP>; // The registration function for the input field.
} & InputHTMLAttributes<HTMLInputElement>; // Additional HTML input attributes.

const renderErrors = (
  customError: string,
  name?: InputProps["name"],
  errors?: InputProps["errors"],
) => {
  return (errors && errors[name ?? ""]) || customError || errors?.message ? (
    <p
      className={cn("text-left text-[12px] mt-1 text-red-500", {
        "verysmall:-bottom-10":
          errors && Number(errors[name ?? ""]?.message?.toString().length) >= 48,
      })}>
      {(errors && (errors[name ?? ""]?.message as UniversalT)) ??
        customError ??
        errors?.message}
    </p>
  ) : null;
};

/**
 * Input field component for forms.
 * @template T - The type of form field values.
 * @param {Partial<InputProps<T>>} props - The input field properties.
 * @returns {JSX.Element} - The rendered input field component.
 */
const InputField = <T extends FieldValues>({
  register,
  name,
  label,
  errors,
  labelclassName = "text-sm",
  isRequired,
  typeFlex = "column",
  type = "text",
  searchIconSize,
  className,
  withSearchIcon,
  customIcon,
  inputChildren,
  maxLength,
  customError,
  ...rest
}: Partial<InputProps<T>>): JSX.Element => {
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      /**
       * Allowing: Integers | Backspace | Tab | Delete | Left & Right Arrow Keys
       * Supported to all browsers
       **/
      const regex = new RegExp(
        /(^\d*[.,]?\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/,
      );

      return !RegExp(regex).exec(event.key) && event.preventDefault();
    }
  };

  const onInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      const {value, maxLength} = event.target;

      if (value.length > maxLength) {
        event.target.value = value.slice(0, maxLength);
      }
    }
  };

  return (
    <div className="relative">
      <fieldset
        className={cn({
          "flex flex-col space-y-1": typeFlex === "column",
          "flex items-center": typeFlex === "row",
        })}>
        {label && (
          <label htmlFor={name} className={labelclassName}>
            {label} {isRequired && <span className="text-red-500"> &#42; </span>}
          </label>
        )}
        <div className="relative">
          <input
            id={name}
            type={type}
            className={cn(className, "outline-none")}
            maxLength={type === "number" ? 12 : maxLength}
            onWheel={(ev) => ev.currentTarget.blur()}
            onKeyDown={onKeyDown}
            onInput={onInputValue}
            {...(typeof register !== "undefined"
              ? register(name as Path<T>, {
                  valueAsNumber: type === "number",
                })
              : {})}
            {...rest}
          />

          {withSearchIcon ? (
            <div
              className="absolute left-3 top-[49%] -translate-y-1/2"
              data-testid="search-icon">
              <SearchIcon size={searchIconSize ?? 16} />
            </div>
          ) : null}

          {customIcon ? (
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2"
              data-testid="custom-icon">
              {customIcon}
            </div>
          ) : null}

          {inputChildren && inputChildren()}
        </div>
      </fieldset>
      {renderErrors(customError as string, name, errors)}
    </div>
  );
};

export {InputField};
