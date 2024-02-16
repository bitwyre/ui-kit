import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgKmfCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.672 9.152v3.072L7.04 9.152h1.208l-1.936 2.496L8.272 15H7.088L5.64 12.512l-.968 1.24V15H3.648V9.152zM10.03 15h-.992V9.152h.993l1.887 4.656 1.889-4.656h1.008V15h-.993v-1.8c0-1.176 0-1.52.057-1.936L12.39 15h-.944l-1.48-3.728c.057.352.065.904.065 1.632zm9.279-2.392h-2.176V15h-1.024V9.152h3.616v.944h-2.592v1.592h2.176z"
    />
  </svg>
);
export default SvgKmfCurrency;
