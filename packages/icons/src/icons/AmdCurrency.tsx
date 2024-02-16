import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgAmdCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.152 15H2.088L4.2 9.152h1.048L7.36 15H6.28l-.472-1.352H3.624zm1.44-4.104-.664 1.888h1.584l-.672-1.888c-.048-.152-.104-.328-.12-.448a4 4 0 0 1-.128.448M9.085 15h-.992V9.152h.992l1.888 4.656 1.888-4.656h1.008V15h-.992v-1.8c0-1.176 0-1.52.056-1.936L11.445 15h-.944l-1.48-3.728c.056.352.064.904.064 1.632zm8.182 0h-2.104V9.152h2.049c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.169 2.912-2.865 2.912m-.151-4.904h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.729-1.992-1.936-1.992"
    />
  </svg>
);
export default SvgAmdCurrency;
