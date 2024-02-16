import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgRwfCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.672 15H2.648V9.152H4.88c1.328 0 2.104.672 2.104 1.824 0 .784-.368 1.344-1.056 1.624L7.04 15H5.92l-.992-2.184H3.672zm0-4.936v1.848H4.88c.648 0 1.032-.344 1.032-.936 0-.584-.384-.912-1.032-.912zM9.192 15 7.448 9.152h1.064l.928 3.088c.088.32.176.648.264 1.16.096-.52.184-.824.288-1.16l.92-3.088h1.128l.904 3.088c.096.328.184.664.28 1.16.112-.544.192-.856.28-1.152l.944-3.096h1.04L13.712 15h-.992l-1.248-4.256L10.2 15zm10.265-2.392h-2.176V15h-1.024V9.152h3.616v.944h-2.592v1.592h2.176z"
    />
  </svg>
);
export default SvgRwfCurrency;
