import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgHrkCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.672 15H3.648V9.152h1.024v2.416h2.592V9.152h1.024V15H7.264v-2.48H4.672zm5.937 0H9.585V9.152h2.232c1.328 0 2.104.672 2.104 1.824 0 .784-.368 1.344-1.056 1.624l1.112 2.4h-1.12l-.992-2.184H10.61zm0-4.936v1.848h1.208c.648 0 1.032-.344 1.032-.936 0-.584-.384-.912-1.032-.912zm5.36-.912v3.072l2.368-3.072h1.208l-1.936 2.496L19.569 15h-1.184l-1.448-2.488-.968 1.24V15h-1.024V9.152z"
    />
  </svg>
);
export default SvgHrkCurrency;
