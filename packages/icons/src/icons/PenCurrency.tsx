import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgPenCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M6.96 12.984H5.672V15H4.648V9.152H6.96c1.176 0 1.936.768 1.936 1.912 0 1.128-.768 1.92-1.936 1.92m-.2-2.92H5.672v2.008h1.072c.704 0 1.08-.376 1.08-1.016s-.384-.992-1.064-.992M13.39 15H9.756V9.152h3.632v.944h-2.608V11.6h2.336v.904h-2.336v1.552h2.608zm2.117 0H14.5V9.152h1.016l2.744 4.144V9.152h1.008V15H18.26l-2.751-4.144z"
    />
  </svg>
);
export default SvgPenCurrency;
