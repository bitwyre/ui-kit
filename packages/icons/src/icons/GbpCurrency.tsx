import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgGbpCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M6.208 10.016c-1.16 0-1.824.84-1.824 2.104 0 1.304.752 2.016 1.832 2.016 1.016 0 1.632-.56 1.632-1.496v-.024H6.08v-.904H8.8V15h-.864l-.064-.672c-.32.448-.984.76-1.776.76-1.64 0-2.784-1.192-2.784-2.992 0-1.776 1.16-3.04 2.92-3.04 1.336 0 2.368.776 2.536 1.968h-1.08c-.184-.688-.776-1.008-1.48-1.008M9.906 15V9.152h2.328c1.152 0 1.856.6 1.856 1.576 0 .648-.288 1.112-.84 1.344.616.2.928.664.928 1.344 0 1-.696 1.584-1.904 1.584zm2.24-4.944H10.93v1.592h1.24c.56 0 .872-.296.872-.816 0-.504-.32-.776-.896-.776m.088 2.456H10.93v1.584h1.304c.576 0 .896-.28.896-.808 0-.496-.328-.776-.896-.776m5.195.472H16.14V15h-1.024V9.152h2.312c1.176 0 1.936.768 1.936 1.912 0 1.128-.768 1.92-1.936 1.92m-.2-2.92H16.14v2.008h1.072c.704 0 1.08-.376 1.08-1.016s-.384-.992-1.064-.992"
    />
  </svg>
);
export default SvgGbpCurrency;
