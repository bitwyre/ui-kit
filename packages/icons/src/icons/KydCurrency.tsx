import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgKydCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.672 9.152v3.072L8.04 9.152h1.208l-1.936 2.496L9.272 15H8.088L6.64 12.512l-.968 1.24V15H4.648V9.152zm5.775 3.544L9.47 9.152h1.144l1.152 2.128c.088.16.144.288.208.432.072-.144.104-.24.207-.432l1.145-2.128h1.112l-1.969 3.544V15h-1.024zM17.267 15h-2.104V9.152h2.049c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.169 2.912-2.865 2.912m-.151-4.904h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.729-1.992-1.936-1.992"
    />
  </svg>
);
export default SvgKydCurrency;
