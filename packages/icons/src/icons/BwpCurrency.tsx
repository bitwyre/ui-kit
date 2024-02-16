import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgBwpCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.648 15V9.152h2.328c1.152 0 1.856.6 1.856 1.576 0 .648-.288 1.112-.84 1.344.616.2.928.664.928 1.344 0 1-.696 1.584-1.904 1.584zm2.24-4.944H4.672v1.592h1.24c.56 0 .872-.296.872-.816 0-.504-.32-.776-.896-.776m.088 2.456H4.672v1.584h1.304c.576 0 .896-.28.896-.808 0-.496-.328-.776-.896-.776M9.958 15 8.214 9.152h1.064l.928 3.088c.088.32.176.648.264 1.16a9 9 0 0 1 .288-1.16l.92-3.088h1.128l.904 3.088c.096.328.184.664.28 1.16.112-.544.192-.856.28-1.152l.944-3.096h1.04L14.478 15h-.992l-1.248-4.256L10.966 15zm9.377-2.016h-1.288V15h-1.024V9.152h2.312c1.176 0 1.936.768 1.936 1.912 0 1.128-.768 1.92-1.936 1.92m-.2-2.92h-1.088v2.008h1.072c.704 0 1.08-.376 1.08-1.016s-.384-.992-1.064-.992"
    />
  </svg>
);
export default SvgBwpCurrency;
