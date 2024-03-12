"use client";

import {EyeIcon, EyeOffIcon, SearchIcon} from "lucide-react";
import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";
import type {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";
import {cn} from "../lib/utils";

/**
 * Type for input field properties.
 * @template IP - The type of form field values.
 */
type InputProps<IP extends FieldValues = UniversalT> = {
  /** The label for the input field. */
  label: string;
  /** The errors associated with the input field. */
  errors: FieldErrors<IP>;
  /** Custom error message for the input field. */
  customError: string | null;
  /** The class name for the label. */
  labelclassName: string;
  /** Indicates if the input field is required. */
  isRequired: boolean;
  /** Indicates if the custom icon is disabled. */
  isCustomIconDisabled: boolean;
  /** Indicates if the search icon is enabled. */
  withSearchIcon: boolean;
  /** The custom icon for the input field. */
  customIcon: React.JSX.Element;
  /** The child elements for the input field component. */
  inputChildren: () => React.JSX.Element;
  /** The size of the search icon. */
  searchIconSize: number;
  /** The function to handle custom icon click event. */
  onClickCustomIcon(): void;
  /** The flex layout type for the input field. */
  typeFlex: "column" | "row";
  /** Indicates if the error icon is enabled. */
  withErrorIcon: boolean;
  /** The name of the input field. */
  name: keyof IP;
  /** Indicates if the eye icon is enabled. */
  withEyeIcon: boolean;
  /** The registration function for the input field. */
  register: UseFormRegister<IP>;
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
  inputChildren,
  customIcon,
  withEyeIcon,
  maxLength,
  customError,
  ...rest
}: Partial<InputProps<T>>): JSX.Element => {
  const [inputType, setInputType] = useState(type);
  const [isInputted, setIsInputted] = useState(false);

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
    setIsInputted(true);

    if (type === "number") {
      const {value, maxLength} = event.target;

      if (value.length > maxLength) {
        event.target.value = value.slice(0, maxLength);
      }
    }
  };

  const onShowPassword = () => {
    if (inputType === "password") setInputType("text");
    else setInputType("password");
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
            type={inputType}
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

          {withEyeIcon && isInputted ? (
            <button
              type="button"
              onClick={onShowPassword}
              className="absolute right-3 top-[49%] -translate-y-1/2 text-bw-gray-500"
              data-testid="eye-icon">
              {inputType === "text" ? <EyeOffIcon size={20} /> : <EyeIcon size={19} />}
            </button>
          ) : null}

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
