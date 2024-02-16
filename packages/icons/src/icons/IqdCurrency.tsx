import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgIqdCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M6.672 9.152V15H5.648V9.152zm5.888 6.288-.64-.72c-.416.24-.912.376-1.464.376-1.672 0-2.824-1.24-2.824-3.024 0-1.776 1.16-3.024 2.832-3.024s2.84 1.24 2.84 3.024c0 .84-.256 1.56-.712 2.088l.624.696zm-.336-3.368c0-1.248-.688-2.04-1.76-2.04s-1.76.792-1.76 2.04.688 2.04 1.76 2.04c.288 0 .544-.056.776-.168l-.776-.872.648-.584.776.872c.216-.336.336-.776.336-1.288M16.361 15h-2.104V9.152h2.048c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.168 2.912-2.864 2.912m-.152-4.904h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.728-1.992-1.936-1.992"
    />
  </svg>
);
export default SvgIqdCurrency;
