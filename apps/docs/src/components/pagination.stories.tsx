import {Pagination} from "@bitwyre/ui-kit";
import * as React from "react";

export const PaginationComponent = () => {
  const [activePage, setActivePage] = React.useState(1);

  return (
    <Pagination
      activePage={activePage}
      pageCount={10}
      onPageActive={(args) => setActivePage(args.selected)}
    />
  );
};
