import type {SVGProps} from "react";

/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgMwkCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.64 15h-.992V9.152h.992l1.888 4.656 1.888-4.656h1.008V15h-.992v-1.8c0-1.176 0-1.52.056-1.936L6 15h-.944l-1.48-3.728c.056.352.064.904.064 1.632zm7.294 0L9.19 9.152h1.064l.928 3.088c.088.32.176.648.264 1.16.096-.52.184-.824.288-1.16l.92-3.088h1.128l.904 3.088c.096.328.184.664.28 1.16.112-.544.192-.856.28-1.152l.944-3.096h1.04L15.454 15h-.992l-1.248-4.256L11.942 15zm8.09-5.848v3.072l2.367-3.072H22.6l-1.937 2.496L22.624 15H21.44l-1.448-2.488-.968 1.24V15H18V9.152z"
    />
  </svg>
);
export default SvgMwkCurrency;
