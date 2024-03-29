import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgUsdCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <path
      fill="#1275E9"
      d="M23.64 14.903c-1.602 6.428-8.114 10.34-14.544 8.738C2.669 22.038-1.244 15.527.359 9.098S8.473-1.244 14.902.36c6.43 1.603 10.342 8.115 8.739 14.544"
    />
    <path
      fill="#fff"
      d="M4.608 12.864V9.152h1.024V12.8c0 .84.456 1.304 1.288 1.304s1.296-.472 1.296-1.304V9.152H9.24v3.712c0 1.368-.896 2.232-2.32 2.232-1.416 0-2.312-.856-2.312-2.232m5.556-2.08c0-1.024.848-1.736 2.08-1.736 1.184 0 1.936.656 1.967 1.712h-1.024c-.023-.504-.383-.8-.96-.8-.632 0-1.04.304-1.04.792 0 .416.225.648.713.76l.92.2c1 .216 1.487.728 1.487 1.6 0 1.088-.848 1.792-2.136 1.792-1.248 0-2.064-.664-2.088-1.712h1.024c.008.496.408.792 1.064.792.68 0 1.112-.296 1.112-.784 0-.392-.2-.624-.68-.728l-.928-.208c-.992-.216-1.511-.784-1.511-1.68M17.338 15h-2.104V9.152h2.048c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.168 2.912-2.864 2.912m-.152-4.904h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.728-1.992-1.936-1.992"
    />
  </svg>
);
export default SvgUsdCurrency;
