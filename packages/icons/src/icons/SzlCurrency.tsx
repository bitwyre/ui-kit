import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgSzlCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.312 10.784c0-1.024.848-1.736 2.08-1.736 1.184 0 1.936.656 1.968 1.712H8.336c-.024-.504-.384-.8-.96-.8-.632 0-1.04.304-1.04.792 0 .416.224.648.712.76l.92.2c1 .216 1.488.728 1.488 1.6 0 1.088-.848 1.792-2.136 1.792-1.248 0-2.064-.664-2.088-1.712h1.024c.008.496.408.792 1.064.792.68 0 1.112-.296 1.112-.784 0-.392-.2-.624-.68-.728l-.928-.208c-.992-.216-1.512-.784-1.512-1.68M14.19 15H9.982v-.952l2.888-3.952h-2.824v-.944h4.096v.912l-2.912 3.992h2.96zm1.92-5.848v4.904h2.447V15h-3.472V9.152z"
    />
  </svg>
);
export default SvgSzlCurrency;
