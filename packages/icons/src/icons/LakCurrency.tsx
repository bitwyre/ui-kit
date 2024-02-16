import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgLakCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.672 9.152v4.904H8.12V15H4.648V9.152zM9.612 15H8.55l2.112-5.848h1.048L13.82 15h-1.08l-.472-1.352h-2.184zm1.44-4.104-.663 1.888h1.584l-.672-1.888c-.048-.152-.104-.328-.12-.448a4 4 0 0 1-.128.448m4.526-1.744v3.072l2.368-3.072h1.208l-1.936 2.496L19.178 15h-1.184l-1.448-2.488-.968 1.24V15h-1.024V9.152z"
    />
  </svg>
);
export default SvgLakCurrency;
