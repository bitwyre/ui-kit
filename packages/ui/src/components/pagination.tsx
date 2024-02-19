import {memo} from "react";
import ReactPaginate, {ReactPaginateProps} from "react-paginate";
import {useMediaQuery} from "src/hooks/useMediaQuery";
import {cn} from "../lib/utils";

const PreviousButton = () => (
  <button
    className="grid h-10 w-10 place-items-center text-white"
    type="button"
    id="button-prev"
    title="buttonPrevious">
    <svg
      fill="currentColor"
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
    className="grid h-10 w-10 place-items-center text-white"
    type="button"
    id="button-next"
    title="buttonNext">
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
    </svg>
  </button>
);

interface PaginationProps extends Omit<ReactPaginateProps, "forcePage"> {
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
        pageLinkClassName="w-full h-full grid place-items-center select-none"
        {...props}
        forcePage={props.activePage}
        breakLinkClassName={cn(
          "grid place-items-center w-10 h-10 select-none text-white",
          props.breakLinkClassName,
        )}
        activeClassName={cn(
          "bg-primary-400 !text-white transition",
          props.activeClassName,
        )}
        containerClassName={cn(
          "flex items-center max-w-max rounded-md overflow-x-hidden border border-bw-gray-800 bg-bw-gray-900",
          "divide-x divide-bw-gray-800",
          props.containerClassName,
        )}
        breakClassName={cn(props.breakClassName)}
        pageClassName={cn(
          "w-10 h-10 rounded-none text-white outline-none cursor-pointer",
          props.pageClassName,
        )}
      />
    );
  },
);

Pagination.displayName = "pagination";
