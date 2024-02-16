import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgLbpCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M5.672 9.152v4.904H8.12V15H4.648V9.152zM8.952 15V9.152h2.329c1.152 0 1.856.6 1.856 1.576 0 .648-.288 1.112-.84 1.344.616.2.928.664.928 1.344 0 1-.697 1.584-1.905 1.584zm2.24-4.944H9.978v1.592h1.24c.56 0 .872-.296.872-.816 0-.504-.32-.776-.896-.776m.089 2.456H9.977v1.584h1.303c.577 0 .897-.28.897-.808 0-.496-.328-.776-.896-.776m5.195.472h-1.288V15h-1.025V9.152h2.313c1.176 0 1.936.768 1.936 1.912 0 1.128-.768 1.92-1.936 1.92m-.2-2.92h-1.088v2.008h1.071c.704 0 1.08-.376 1.08-1.016s-.383-.992-1.063-.992"
    />
  </svg>
);
export default SvgLbpCurrency;
