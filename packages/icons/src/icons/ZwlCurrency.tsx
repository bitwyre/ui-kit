import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgZwlCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M7.456 15H3.248v-.952l2.888-3.952H3.312v-.944h4.096v.912l-2.912 3.992h2.96zm2.111 0L7.823 9.152h1.064l.928 3.088c.088.32.176.648.264 1.16.096-.52.184-.824.288-1.16l.92-3.088h1.128l.904 3.088c.096.328.184.664.28 1.16.112-.544.192-.856.28-1.152l.944-3.096h1.04L14.087 15h-.992l-1.248-4.256L10.575 15zm8.09-5.848v4.904h2.447V15h-3.472V9.152z"
    />
  </svg>
);
export default SvgZwlCurrency;
