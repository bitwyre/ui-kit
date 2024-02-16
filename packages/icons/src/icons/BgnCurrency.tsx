import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgBgnCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.648 15V9.152h2.328c1.152 0 1.856.6 1.856 1.576 0 .648-.288 1.112-.84 1.344.616.2.928.664.928 1.344 0 1-.696 1.584-1.904 1.584zm2.24-4.944H4.672v1.592h1.24c.56 0 .872-.296.872-.816 0-.504-.32-.776-.896-.776m.088 2.456H4.672v1.584h1.304c.576 0 .896-.28.896-.808 0-.496-.328-.776-.896-.776m5.443-2.496c-1.16 0-1.824.84-1.824 2.104 0 1.304.752 2.016 1.832 2.016 1.016 0 1.632-.56 1.632-1.496v-.024H11.29v-.904h2.72V15h-.864l-.064-.672c-.32.448-.984.76-1.776.76-1.64 0-2.784-1.192-2.784-2.992 0-1.776 1.16-3.04 2.92-3.04 1.336 0 2.368.776 2.536 1.968h-1.08c-.184-.688-.776-1.008-1.48-1.008M16.125 15h-1.008V9.152h1.016l2.744 4.144V9.152h1.008V15h-1.008l-2.752-4.144z"
    />
  </svg>
);
export default SvgBgnCurrency;
