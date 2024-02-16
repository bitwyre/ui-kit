import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgAllCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.152 15H4.088L6.2 9.152h1.048L9.36 15H8.28l-.472-1.352H5.624zm1.44-4.104-.664 1.888h1.584l-.672-1.888c-.048-.152-.104-.328-.12-.448a4 4 0 0 1-.128.448m4.525-1.744v4.904h2.448V15h-3.472V9.152zm4.305 0v4.904h2.448V15h-3.472V9.152z"
    />
  </svg>
);
export default SvgAllCurrency;
