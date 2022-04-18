import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { ReactComponent as PreviousIcon } from "../../../assets/icons/IcoArrowPrev.svg";
import { ReactComponent as NextIcon } from "../../../assets/icons/IcoArrowNext.svg";
import { ReactComponent as BreakIcon } from "../../../assets/icons/IcoPaginationMore.svg";
import styles from "./style.module.scss";
import clsx from "clsx";
import { SvgIcon } from "@mui/material";

function Pagination({
  pageCount = 0,
  onChangePage = null,
  initialPage = 0,
  pageRangeDisplayed,
}) {
  // We start with an empty list of items.
  const [isLoaded, setIsLoaded] = React.useState(false);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    if (!isLoaded) setIsLoaded(true);
    else {
      onChangePage && onChangePage(event.selected);
    }
  };

  return (
    <>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        initialPage={initialPage}
        marginPagesDisplayed={1}
        pageCount={pageCount || 1}
        previousLabel={
          <SvgIcon viewBox={"0 0 9 14"} component={PreviousIcon} />
        }
        nextLabel={<SvgIcon style={{transform: "rotate(180deg)", transformOrigin: "center"}} viewBox={"0 0 9 14"} component={PreviousIcon} />}
        pageClassName={clsx(styles.pageItem)}
        pageLinkClassName={clsx(styles.pageLink)}
        previousClassName={clsx(styles.pageItem, styles.pagePrev)}
        nextClassName={clsx(styles.pageItem, styles.pageNext)}
        breakLabel={<SvgIcon viewBox={"0 0 16 5"} component={BreakIcon} />}
        breakClassName={clsx(styles.pageBreak, styles.pageItem)}
        containerClassName={clsx(styles.pageContainer)}
        activeClassName={clsx(styles.pageActive)}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
