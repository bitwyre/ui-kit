import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgDopCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.752 15H3.648V9.152h2.048c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.168 2.912-2.864 2.912M5.6 10.096h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.728-1.992-1.936-1.992m9.306 1.976c0 1.776-1.168 3.024-2.848 3.024-1.672 0-2.824-1.24-2.824-3.024 0-1.776 1.16-3.024 2.832-3.024s2.84 1.24 2.84 3.024m-1.08 0c0-1.248-.688-2.04-1.76-2.04s-1.76.792-1.76 2.04.688 2.04 1.76 2.04 1.76-.808 1.76-2.04m4.345.912h-1.288V15h-1.024V9.152h2.312c1.176 0 1.936.768 1.936 1.912 0 1.128-.768 1.92-1.936 1.92m-.2-2.92h-1.088v2.008h1.072c.704 0 1.08-.376 1.08-1.016s-.384-.992-1.064-.992"
    />
  </svg>
);
export default SvgDopCurrency;
