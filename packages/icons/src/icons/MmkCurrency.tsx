import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgMmkCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.64 15h-.992V9.152h.992l1.888 4.656 1.888-4.656h1.008V15h-.992v-1.8c0-1.176 0-1.52.056-1.936L6 15h-.944l-1.48-3.728c.056.352.064.904.064 1.632zm7.07 0h-.992V9.152h.992l1.888 4.656 1.888-4.656h1.008V15h-.992v-1.8c0-1.176 0-1.52.056-1.936L13.07 15h-.944l-1.48-3.728c.056.352.064.904.064 1.632zm7.103-5.848v3.072l2.368-3.072h1.208l-1.936 2.496L21.413 15h-1.185l-1.448-2.488-.968 1.24V15h-1.024V9.152z"
    />
  </svg>
);
export default SvgMmkCurrency;
