import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgBrlCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.648 15V9.152h2.328c1.152 0 1.856.6 1.856 1.576 0 .648-.288 1.112-.84 1.344.616.2.928.664.928 1.344 0 1-.696 1.584-1.904 1.584zm2.24-4.944H5.672v1.592h1.24c.56 0 .872-.296.872-.816 0-.504-.32-.776-.896-.776m.088 2.456H5.672v1.584h1.304c.576 0 .896-.28.896-.808 0-.496-.328-.776-.896-.776M10.883 15H9.859V9.152h2.232c1.328 0 2.104.672 2.104 1.824 0 .784-.368 1.344-1.056 1.624L14.25 15h-1.12l-.992-2.184h-1.256zm0-4.936v1.848h1.208c.648 0 1.032-.344 1.032-.936 0-.584-.384-.912-1.032-.912zm5.36-.912v4.904h2.447V15h-3.472V9.152z"
    />
  </svg>
);
export default SvgBrlCurrency;
