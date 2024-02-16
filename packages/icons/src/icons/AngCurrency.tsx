import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgAngCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.152 15H3.088L5.2 9.152h1.048L8.36 15H7.28l-.472-1.352H4.624zm1.44-4.104-.664 1.888h1.584l-.672-1.888c-.048-.152-.104-.328-.12-.448a4 4 0 0 1-.128.448M10.102 15H9.092V9.152h1.016l2.744 4.144V9.152h1.008V15h-1.008l-2.752-4.144zm7.614-4.984c-1.16 0-1.824.84-1.824 2.104 0 1.304.752 2.016 1.832 2.016 1.016 0 1.632-.56 1.632-1.496v-.024h-1.768v-.904h2.72V15h-.864l-.064-.672c-.32.448-.984.76-1.776.76-1.64 0-2.784-1.192-2.784-2.992 0-1.776 1.16-3.04 2.92-3.04 1.336 0 2.368.776 2.536 1.968h-1.08c-.184-.688-.776-1.008-1.48-1.008"
    />
  </svg>
);
export default SvgAngCurrency;
