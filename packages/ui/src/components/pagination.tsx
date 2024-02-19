import {memo} from "react";
import ReactPaginate, {ReactPaginateProps} from "react-paginate";
import {useMediaQuery} from "src/hooks/useMediaQuery";
import {cn} from "../lib/utils";

const BUTTON_MAIN_STYLE = "w-[35px] h-[35px] rounded-md hover:bg-[#2a3138] text-center";
const BUTTON_TOOL_STYLE = "bg-[#293137] rounded-md p-1";

const PreviousButton = () => (
  <button
    type="button"
    id="button-prev"
    title="buttonPrevious"
    className={BUTTON_TOOL_STYLE}>
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
    </svg>
  </button>
);

const NextButton = () => (
  <button
    type="button"
    id="button-next"
    title="buttonNext"
    className={BUTTON_TOOL_STYLE}>
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
    </svg>
  </button>
);

export interface PaginationProps extends Omit<ReactPaginateProps, "forecePage"> {
  activePage: number;
}

/**
 * A component that render pagination to handle pagination
 * you need to pass important props which is
 * - `pageCount` this tels how many pages there are available
 * - `onPageChange` will fire when pages being selected
 * - `activePage` will hold your current active page
 *
 * @example
 * ```tsx
 * const TableWithPaginate = () => {
 *  const [page, setPage] = useState(0)
 *
 *  const onPageChange = ({selected}: {selected: number}) => setPage(selected)
 *
 *  return <Paginate activePage={page} onPageChange={onPageChange} />
 * }
 * ```
 */
export const Pagination = memo(
  ({
    previousLabel = <PreviousButton />,
    nextLabel = <NextButton />,
    ...props
  }: PaginationProps) => {
    const isMobile = useMediaQuery("only screen and (max-width: 650px)");

    return (
      <ReactPaginate
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        breakLabel=".."
        marginPagesDisplayed={isMobile ? 1 : 2}
        pageRangeDisplayed={1}
        containerClassName="flex items-center space-x-4 xsm:space-x-3 sm:space-x-4"
        pageLinkClassName="w-full h-full flex items-center justify-center"
        activeClassName="bg-[#2a3138] rounded-md text-white"
        {...props}
        forcePage={props.activePage}
        breakClassName={cn(BUTTON_MAIN_STYLE, props.breakClassName)}
        pageClassName={cn(
          BUTTON_MAIN_STYLE,
          "text-white outline-none cursor-pointer",
          props.pageClassName,
        )}
      />
    );
  },
);

Pagination.displayName = "pagination";
