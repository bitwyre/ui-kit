import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgWstCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.864 15 3.12 9.152h1.064l.928 3.088c.088.32.176.648.264 1.16a9 9 0 0 1 .288-1.16l.92-3.088h1.128l.904 3.088c.096.328.184.664.28 1.16.112-.544.192-.856.28-1.152l.944-3.096h1.04L9.384 15h-.992l-1.248-4.256L5.872 15zm6.675-4.216c0-1.024.848-1.736 2.08-1.736 1.184 0 1.936.656 1.967 1.712h-1.024c-.023-.504-.383-.8-.96-.8-.632 0-1.04.304-1.04.792 0 .416.225.648.713.76l.92.2c1 .216 1.487.728 1.487 1.6 0 1.088-.848 1.792-2.136 1.792-1.248 0-2.064-.664-2.088-1.712h1.024c.008.496.408.792 1.064.792.68 0 1.112-.296 1.112-.784 0-.392-.2-.624-.68-.728l-.928-.208c-.992-.216-1.511-.784-1.511-1.68m4.48-.688v-.944h4.448v.944h-1.712V15H17.73v-4.904z"
    />
  </svg>
);
export default SvgWstCurrency;
