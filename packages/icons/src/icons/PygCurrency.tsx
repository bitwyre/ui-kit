import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgPygCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.96 12.984H4.672V15H3.648V9.152H5.96c1.176 0 1.936.768 1.936 1.912 0 1.128-.768 1.92-1.936 1.92m-.2-2.92H4.672v2.008h1.072c.704 0 1.08-.376 1.08-1.016s-.384-.992-1.064-.992m4.405 2.632L8.19 9.152h1.144l1.152 2.128c.088.16.144.288.208.432.072-.144.104-.24.208-.432l1.144-2.128h1.112l-1.968 3.544V15h-1.024zm5.832-2.68c-1.16 0-1.824.84-1.824 2.104 0 1.304.752 2.016 1.832 2.016 1.016 0 1.632-.56 1.632-1.496v-.024h-1.768v-.904h2.72V15h-.864l-.064-.672c-.32.448-.984.76-1.776.76-1.64 0-2.784-1.192-2.784-2.992 0-1.776 1.16-3.04 2.92-3.04 1.336 0 2.368.776 2.536 1.968h-1.08c-.184-.688-.776-1.008-1.48-1.008"
    />
  </svg>
);
export default SvgPygCurrency;