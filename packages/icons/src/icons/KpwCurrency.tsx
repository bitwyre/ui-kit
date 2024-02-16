import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgKpwCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.672 9.152v3.072L6.04 9.152h1.208l-1.936 2.496L7.272 15H6.088L4.64 12.512l-.968 1.24V15H2.648V9.152zm6.679 3.832H9.062V15H8.038V9.152h2.313c1.176 0 1.935.768 1.935 1.912 0 1.128-.768 1.92-1.935 1.92m-.2-2.92H9.063v2.008h1.071c.704 0 1.08-.376 1.08-1.016s-.383-.992-1.064-.992M14.363 15 12.62 9.152h1.064l.928 3.088c.088.32.176.648.264 1.16.096-.52.184-.824.288-1.16l.92-3.088h1.128l.904 3.088c.096.328.184.664.28 1.16.112-.544.192-.856.28-1.152l.944-3.096h1.04L18.884 15h-.992l-1.248-4.256L15.372 15z"
    />
  </svg>
);
export default SvgKpwCurrency;
