import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgNokCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.656 15H3.648V9.152h1.016l2.744 4.144V9.152h1.008V15H7.408l-2.752-4.144zm10.39-2.928c0 1.776-1.168 3.024-2.848 3.024-1.672 0-2.824-1.24-2.824-3.024 0-1.776 1.16-3.024 2.832-3.024s2.84 1.24 2.84 3.024m-1.08 0c0-1.248-.688-2.04-1.76-2.04s-1.76.792-1.76 2.04.688 2.04 1.76 2.04 1.76-.808 1.76-2.04m3.057-2.92v3.072l2.369-3.072h1.207l-1.936 2.496L20.624 15H19.44l-1.448-2.488-.968 1.24V15H16V9.152z"
    />
  </svg>
);
export default SvgNokCurrency;
