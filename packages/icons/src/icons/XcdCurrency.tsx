import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgXcdCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.12 12.08 3.176 9.152h1.216l.712 1.048c.24.36.44.696.656 1.096l1.36-2.144h1.192L6.4 12.072 8.32 15H7.112l-.656-.968a17 17 0 0 1-.696-1.168L4.336 15h-1.2zm6.172 3.016c-1.704 0-2.808-1.184-2.808-3.016 0-1.816 1.144-3.024 2.856-3.024 1.384 0 2.416.808 2.616 2.064h-1.08c-.2-.68-.784-1.08-1.56-1.08-1.08 0-1.76.784-1.76 2.032 0 1.24.688 2.04 1.76 2.04.792 0 1.4-.416 1.592-1.064h1.064c-.224 1.232-1.296 2.048-2.68 2.048M16.994 15H14.89V9.152h2.048c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.168 2.912-2.864 2.912m-.152-4.904h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.728-1.992-1.936-1.992"
    />
  </svg>
);
export default SvgXcdCurrency;
