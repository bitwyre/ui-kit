import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgBbdCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.648 15V9.152h2.328c1.152 0 1.856.6 1.856 1.576 0 .648-.288 1.112-.84 1.344.616.2.928.664.928 1.344 0 1-.696 1.584-1.904 1.584zm2.24-4.944H5.672v1.592h1.24c.56 0 .872-.296.872-.816 0-.504-.32-.776-.896-.776m.088 2.456H5.672v1.584h1.304c.576 0 .896-.28.896-.808 0-.496-.328-.776-.896-.776M9.859 15V9.152h2.328c1.152 0 1.856.6 1.856 1.576 0 .648-.288 1.112-.84 1.344.616.2.928.664.928 1.344 0 1-.696 1.584-1.904 1.584zm2.24-4.944h-1.216v1.592h1.24c.56 0 .872-.296.872-.816 0-.504-.32-.776-.896-.776m.088 2.456h-1.304v1.584h1.304c.576 0 .896-.28.896-.808 0-.496-.328-.776-.896-.776M17.174 15H15.07V9.152h2.048c1.728 0 2.92 1.192 2.92 2.936 0 1.72-1.168 2.912-2.864 2.912m-.152-4.904h-.928v3.96h.984c1.168 0 1.88-.752 1.88-1.968 0-1.24-.728-1.992-1.936-1.992"
    />
  </svg>
);
export default SvgBbdCurrency;
