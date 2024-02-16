import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgKwdCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.672 9.152v3.072L6.04 9.152h1.208l-1.936 2.496L7.272 15H6.088L4.64 12.512l-.968 1.24V15H2.648V9.152zM9.254 15 7.511 9.152h1.064l.928 3.088c.088.32.175.648.263 1.16.096-.52.184-.824.289-1.16l.92-3.088h1.128l.904 3.088c.095.328.184.664.28 1.16.111-.544.191-.856.28-1.152l.944-3.096h1.04L13.774 15h-.992l-1.248-4.256L10.263 15zm9.17 0H16.32V9.152h2.048c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.168 2.912-2.864 2.912m-.152-4.904h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.728-1.992-1.936-1.992"
    />
  </svg>
);
export default SvgKwdCurrency;
