import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgKgsCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.672 9.152v3.072L8.04 9.152h1.208l-1.936 2.496L9.272 15H8.088L6.64 12.512l-.968 1.24V15H4.648V9.152zm6.513.864c-1.16 0-1.825.84-1.825 2.104 0 1.304.752 2.016 1.832 2.016 1.016 0 1.632-.56 1.632-1.496v-.024h-1.768v-.904h2.72V15h-.864l-.064-.672c-.32.448-.984.76-1.776.76-1.64 0-2.784-1.192-2.784-2.992 0-1.776 1.16-3.04 2.92-3.04 1.336 0 2.368.776 2.537 1.968h-1.08c-.184-.688-.776-1.008-1.48-1.008m3.361.768c0-1.024.848-1.736 2.08-1.736 1.184 0 1.936.656 1.968 1.712H18.57c-.024-.504-.384-.8-.96-.8-.632 0-1.04.304-1.04.792 0 .416.224.648.712.76l.92.2c1 .216 1.488.728 1.488 1.6 0 1.088-.848 1.792-2.136 1.792-1.248 0-2.064-.664-2.088-1.712h1.024c.008.496.408.792 1.064.792.68 0 1.112-.296 1.112-.784 0-.392-.2-.624-.68-.728l-.928-.208c-.992-.216-1.512-.784-1.512-1.68"
    />
  </svg>
);
export default SvgKgsCurrency;
