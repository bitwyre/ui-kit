import type {SVGProps} from "react";
/**
 * Renders an SVG icon for a currency with optional size.
 *
 * @param {SVGProps<SVGSVGElement> & {size?: number}} props - The SVG element props and an optional size parameter
 * @return {JSX.Element} - The SVG currency icon
 */
const SvgSarCurrency = (props: SVGProps<SVGSVGElement> & {size?: number}) => (
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
      d="M4.312 10.784c0-1.024.848-1.736 2.08-1.736 1.184 0 1.936.656 1.968 1.712H7.336c-.024-.504-.384-.8-.96-.8-.632 0-1.04.304-1.04.792 0 .416.224.648.712.76l.92.2c1 .216 1.488.728 1.488 1.6 0 1.088-.848 1.792-2.136 1.792-1.248 0-2.064-.664-2.088-1.712h1.024c.008.496.408.792 1.064.792.68 0 1.112-.296 1.112-.784 0-.392-.2-.624-.68-.728l-.928-.208c-.992-.216-1.512-.784-1.512-1.68M9.886 15H8.822l2.112-5.848h1.048L14.094 15h-1.08l-.472-1.352h-2.184zm1.44-4.104-.664 1.888h1.584l-.672-1.888c-.048-.152-.104-.328-.12-.448a4 4 0 0 1-.128.448M15.851 15h-1.024V9.152h2.233c1.328 0 2.104.672 2.104 1.824 0 .784-.368 1.344-1.056 1.624l1.111 2.4H18.1l-.991-2.184h-1.256zm0-4.936v1.848h1.209c.648 0 1.032-.344 1.032-.936 0-.584-.384-.912-1.032-.912z"
    />
  </svg>
);
export default SvgSarCurrency;
