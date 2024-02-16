import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgMxnCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.64 15h-.992V9.152h.992l1.888 4.656 1.888-4.656h1.008V15h-.992v-1.8c0-1.176 0-1.52.056-1.936L7 15h-.944l-1.48-3.728c.056.352.064.904.064 1.632zm7.55-2.92-1.944-2.928h1.216l.712 1.048c.24.36.44.696.656 1.096l1.36-2.144h1.192l-1.912 2.92L15.39 15h-1.208l-.656-.968a17 17 0 0 1-.696-1.168L11.406 15h-1.2zM17.172 15h-1.008V9.152h1.016l2.744 4.144V9.152h1.008V15h-1.008l-2.752-4.144z"
    />
  </svg>
);
export default SvgMxnCurrency;
