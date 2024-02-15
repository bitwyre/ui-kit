import {EyeIcon, EyeOffIcon, SearchIcon} from "lucide-react";
import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";

import type {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";
import {cn} from "../lib/utils";

type InputProps<IP extends FieldValues = UniversalT> = {
  label: string;
  errors: FieldErrors<IP>;
  customError: string | null;
  labelclassName: string;
  isRequired: boolean;
  isCustomIconDisabled: boolean;
  withSearchIcon: boolean;
  customIcon: React.JSX.Element;
  searchIconSize: number;
  onClickCustomIcon(): void;
  typeFlex: "column" | "row";
  withErrorIcon: boolean;
  name: keyof IP;
  withEyeIcon: boolean;
  register: UseFormRegister<IP>;
} & InputHTMLAttributes<HTMLInputElement>;

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
  withEyeIcon,
  maxLength,
  customError,
  ...rest
}: Partial<InputProps<T>>) => {
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
        </div>
      </fieldset>
      {renderErrors(customError as string, name, errors)}
    </div>
  );
};

export default InputField;
