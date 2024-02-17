"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import {Slot} from "@radix-ui/react-slot";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import {cn} from "../lib/utils";
import {Label} from "./label";

/**
 * Form component used to provide form context to form fields.
 */
const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

/**
 * Provider component used to wrap form fields and integrate them with React Hook Form.
 *
 * @typeparam TFieldValues - Type of form field values.
 * @typeparam TName - Type of form field name.
 *
 * @param props - Props to be passed down to the Controller component.
 *
 * @returns A React component that integrates form fields with React Hook Form.
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{name: props.name}}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

/**
 * Custom hook to access form field information within a form context.
 *
 * @returns An object containing form field information such as id, name, state, etc.
 *
 * @throws Throws an error if used outside the scope of a FormField context.
 */
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const {getFieldState, formState} = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const {id} = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

/**
 * Form item component used to wrap form fields and provide an ID for accessibility.
 */
const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{id}}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

/**
 * Form label component used for labeling form fields.
 *
 * @remarks This component automatically associates itself with its corresponding form field.
 */
const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({className, ...props}, ref) => {
  const {error, formItemId} = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

/**
 * Form control component used to wrap form field controls such as inputs, selects, etc.
 *
 * @remarks This component manages accessibility attributes for form fields.
 */
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({...props}, ref) => {
  const {error, formItemId, formDescriptionId, formMessageId} = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

/**
 * Form description component used to provide additional information about form fields.
 */
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => {
  const {formDescriptionId} = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

/**
 * Form message component used to display validation errors or other messages related to form fields.
 *
 * @remarks If no message is provided, the component will not render.
 */
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({className, children, ...props}, ref) => {
  const {error, formMessageId} = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}>
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * FormInput component represents an input element with customizable properties.
 * @remarks This component is created using React.forwardRef to forward the ref to the underlying input element.
 * @param {object} props - The properties for the input element.
 * @param {string} [props.className] - Additional CSS class names to apply to the input element.
 * @param {string} [props.type] - The type of input element (e.g., "text", "password").
 * @param {React.Ref<HTMLInputElement>} ref - The ref object used to access the underlying input element.
 * @returns {JSX.Element} - The rendered input element.
 */
const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
FormInput.displayName = "Input";

export {
  useFormField,
  Form,
  FormInput,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
