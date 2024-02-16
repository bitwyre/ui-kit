import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgOmrCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M7.984 12.072c0 1.776-1.168 3.024-2.848 3.024-1.672 0-2.824-1.24-2.824-3.024 0-1.776 1.16-3.024 2.832-3.024s2.84 1.24 2.84 3.024m-1.08 0c0-1.248-.688-2.04-1.76-2.04s-1.76.792-1.76 2.04.688 2.04 1.76 2.04 1.76-.808 1.76-2.04M9.929 15h-.992V9.152h.992l1.888 4.656 1.888-4.656h1.008V15h-.992v-1.8c0-1.176 0-1.52.056-1.936L12.289 15h-.944l-1.48-3.728c.056.352.064.904.064 1.632zm7.102 0h-1.024V9.152h2.232c1.328 0 2.104.672 2.104 1.824 0 .784-.368 1.344-1.056 1.624L20.4 15h-1.12l-.992-2.184h-1.256zm0-4.936v1.848h1.208c.648 0 1.032-.344 1.032-.936 0-.584-.384-.912-1.032-.912z"
    />
  </svg>
);
export default SvgOmrCurrency;
