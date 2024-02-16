import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgAfnCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.152 15H4.088L6.2 9.152h1.048L9.36 15H8.28l-.472-1.352H5.624zm1.44-4.104-.664 1.888h1.584l-.672-1.888c-.048-.152-.104-.328-.12-.448a4 4 0 0 1-.128.448m6.701 1.712h-2.176V15h-1.024V9.152h3.616v.944h-2.592v1.592h2.176zM15.64 15h-1.008V9.152h1.016l2.744 4.144V9.152H19.4V15h-1.008l-2.752-4.144z"
    />
  </svg>
);
export default SvgAfnCurrency;
