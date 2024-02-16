import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgJpyCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.16 13.352v-.344h.984v.344c0 .448.248.8.824.8s.816-.328.816-.84v-4.16h1.024v4.216c0 1.032-.72 1.736-1.832 1.736-1.2 0-1.816-.744-1.816-1.752m7.214-.368h-1.288V15H9.062V9.152h2.312c1.176 0 1.936.768 1.936 1.912 0 1.128-.768 1.92-1.936 1.92m-.2-2.92h-1.088v2.008h1.072c.704 0 1.08-.376 1.08-1.016s-.384-.992-1.064-.992m4.405 2.632-1.976-3.544h1.144L15.9 11.28c.088.16.144.288.208.432.072-.144.104-.24.208-.432l1.144-2.128h1.112l-1.968 3.544V15H15.58z"
    />
  </svg>
);
export default SvgJpyCurrency;
