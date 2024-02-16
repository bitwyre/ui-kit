import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgCnyCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M6.12 15.096c-1.704 0-2.808-1.184-2.808-3.016 0-1.816 1.144-3.024 2.856-3.024 1.384 0 2.416.808 2.616 2.064h-1.08c-.2-.68-.784-1.08-1.56-1.08-1.08 0-1.76.784-1.76 2.032 0 1.24.688 2.04 1.76 2.04.792 0 1.4-.416 1.592-1.064H8.8c-.224 1.232-1.296 2.048-2.68 2.048M10.726 15H9.718V9.152h1.016l2.744 4.144V9.152h1.008V15h-1.008l-2.752-4.144zm6.463-2.304-1.976-3.544h1.144l1.152 2.128c.088.16.144.288.208.432.072-.144.104-.24.208-.432l1.144-2.128h1.112l-1.968 3.544V15h-1.024z"
    />
  </svg>
);
export default SvgCnyCurrency;
