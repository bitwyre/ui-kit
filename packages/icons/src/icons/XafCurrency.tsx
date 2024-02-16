import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgXafCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M6.12 12.08 4.176 9.152h1.216l.712 1.048c.24.36.44.696.656 1.096l1.36-2.144h1.192L7.4 12.072 9.32 15H8.112l-.656-.968a17 17 0 0 1-.696-1.168L5.336 15h-1.2zM10.597 15H9.533l2.112-5.848h1.048L14.805 15h-1.08l-.472-1.352H11.07zm1.44-4.104-.664 1.888h1.584l-.672-1.888c-.048-.152-.104-.328-.12-.448a4 4 0 0 1-.128.448m6.701 1.712h-2.175V15h-1.025V9.152h3.617v.944h-2.593v1.592h2.176z"
    />
  </svg>
);
export default SvgXafCurrency;
