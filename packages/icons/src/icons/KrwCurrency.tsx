import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgKrwCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.672 9.152v3.072L6.04 9.152h1.208l-1.936 2.496L7.272 15H6.088L4.64 12.512l-.968 1.24V15H2.648V9.152zM9.062 15H8.038V9.152h2.233c1.328 0 2.104.672 2.103 1.824 0 .784-.367 1.344-1.056 1.624L12.43 15h-1.12l-.992-2.184H9.063zm0-4.936v1.848h1.209c.647 0 1.031-.344 1.031-.936 0-.584-.383-.912-1.031-.912zM14.583 15 12.84 9.152h1.064l.928 3.088c.088.32.176.648.264 1.16.096-.52.184-.824.288-1.16l.92-3.088h1.128l.904 3.088c.096.328.184.664.28 1.16.112-.544.192-.856.28-1.152l.944-3.096h1.04L19.103 15h-.992l-1.248-4.256L15.59 15z"
    />
  </svg>
);
export default SvgKrwCurrency;
