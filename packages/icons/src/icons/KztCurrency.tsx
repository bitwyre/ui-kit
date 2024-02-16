import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgKztCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.672 9.152v3.072L8.04 9.152h1.208l-1.936 2.496L9.272 15H8.088L6.64 12.512l-.968 1.24V15H4.648V9.152zM13.846 15H9.638v-.952l2.889-3.952H9.703v-.944h4.096v.912l-2.912 3.992h2.96zm.384-4.904v-.944h4.448v.944h-1.712V15h-1.024v-4.904z"
    />
  </svg>
);
export default SvgKztCurrency;
