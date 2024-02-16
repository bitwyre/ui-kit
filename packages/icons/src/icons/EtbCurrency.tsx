import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgEtbCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M8.28 15H4.648V9.152H8.28v.944H5.672V11.6h2.336v.904H5.672v1.552H8.28zm.598-4.904v-.944h4.448v.944h-1.712V15H10.59v-4.904zM14.108 15V9.152h2.329c1.152 0 1.856.6 1.856 1.576 0 .648-.288 1.112-.84 1.344.616.2.928.664.928 1.344 0 1-.696 1.584-1.904 1.584zm2.24-4.944h-1.215v1.592h1.24c.56 0 .872-.296.872-.816 0-.504-.32-.776-.896-.776m.089 2.456h-1.304v1.584h1.304c.576 0 .896-.28.896-.808 0-.496-.328-.776-.896-.776"
    />
  </svg>
);
export default SvgEtbCurrency;
