import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgDjfCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M6.752 15H4.648V9.152h2.048c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.168 2.912-2.864 2.912M6.6 10.096h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.728-1.992-1.936-1.992m3.482 3.256v-.344h.984v.344c0 .448.248.8.824.8s.816-.328.816-.84v-4.16h1.024v4.216c0 1.032-.72 1.736-1.832 1.736-1.2 0-1.816-.744-1.816-1.752m8.102-.744h-2.176V15h-1.024V9.152H18.6v.944h-2.592v1.592h2.176z"
    />
  </svg>
);
export default SvgDjfCurrency;
