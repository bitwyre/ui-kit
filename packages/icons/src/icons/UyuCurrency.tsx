import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgUyuCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M3.608 12.864V9.152h1.024V12.8c0 .84.456 1.304 1.288 1.304s1.296-.472 1.296-1.304V9.152H8.24v3.712c0 1.368-.896 2.232-2.32 2.232-1.416 0-2.312-.856-2.312-2.232m7.3-.168L8.931 9.152h1.143l1.152 2.128c.088.16.144.288.208.432.072-.144.104-.24.208-.432l1.144-2.128H13.9l-1.968 3.544V15h-1.024zm3.676.168V9.152h1.024V12.8c0 .84.456 1.304 1.288 1.304s1.296-.472 1.296-1.304V9.152h1.024v3.712c0 1.368-.896 2.232-2.32 2.232-1.416 0-2.312-.856-2.312-2.232"
    />
  </svg>
);
export default SvgUyuCurrency;
