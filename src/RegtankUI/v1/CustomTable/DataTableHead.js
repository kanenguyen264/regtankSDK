import { isEmpty } from "lodash";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React from "react";
import { capitalizeFirst } from "../../../utils/string";
import { PaginationContext } from "../withPagination";
import { makeStyles, withStyles } from "@mui/styles";
import clsx from "clsx";
import { toRem } from "../utils";
import Checkbox from "../Checkbox";
import { ReactComponent as SortIcon } from "../../../assets/icons/IcoSort.svg";
import Tooltip from "../Tooltip";
const useStyles = makeStyles((theme) => ({
  rootChecked: {
    "&$checked": {
      color: "#0080FF",
    },
  },
  checked: {
    color: "green",
  },
  tableCellNone: {
    width: 0,
  },
  fixedCol: {
    position: "sticky",
    backgroundColor: "#fff",
    zIndex: "10",
    left: 0,
  },
}));
const DataTableHead = React.forwardRef(function DataTableHead(props, ref) {
  const createSortHandler = (property) => (event) => {
      props.onRequestSort(event, property);
    },
    { paginationParams } = React.useContext(PaginationContext);

  const { onSelectAllClick, numSelected, rowCount, list } = props;
  const sort = paginationParams?.sort;
  const classesName = useStyles();

  let order, orderBy;
  if (!isEmpty(sort)) {
    let sortType = sort.includes("asc");
    order = sortType ? "asc" : "desc";
    orderBy = sort ? sort.split(",")[0] : "";
  }

  return (
    <TableHead ref={ref}>
      <TableRow>
        {props.options.enableCollapsibleCell && (
          <TableCell
            style={{ minWidth: toRem(55), maxWidth: toRem(55) }}
            className={clsx({
              [classesName.fixedCol]:
                rowCount > 0 && props.options.isFixedFirstColumn,
            })}
          />
        )}
        {props.options.selectable && (
          <TableCell
            padding="checkbox"
            className={clsx({
              [classesName.fixedCol]:
                rowCount > 0 && props.options.isFixedFirstColumn,
            })}
            style={{
              minWidth: toRem(55),
              maxWidth: toRem(55),
              ...(props.options.enableCollapsibleCell
                ? { left: toRem(55) }
                : {}),
            }}
          >
            <Checkbox
              style={{
                color: numSelected > 0 ? "#0080FF" : "#BDBDBD",
              }}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              classes={{
                root: classesName.rootChecked,
                checked: classesName.checked,
              }}
            />
          </TableCell>
        )}
        {list.map(([field, column], index) => {
          if (column.enable || true) {
            return (
              <TableCell
                className={clsx({
                  [classesName?.fixedCol]:
                    props.options.isFixedFirstColumn &&
                    index === 0 &&
                    rowCount > 0,
                })}
                style={{
                  ...(index === 0 &&
                  props.options.isFixedFirstColumn &&
                  props.options.selectable
                    ? props.options.enableCollapsibleCell
                      ? { left: toRem(110) }
                      : { left: toRem(62) }
                    : {}),
                  ...(column?.width ? { width: column.width } : {}),
                }}
                key={field}
                padding={column.disablePadding ? "none" : "default"}
                sortDirection={orderBy === field ? order : false}
                align={column.align || "left"}
                {...(column.headerProps || {})}
              >
                {column.sort ? (
                  <Tooltip arrow title={"Sort"} enterDelay={300}>
                    <TableSortLabel
                      active={field === orderBy}
                      direction={field === orderBy ? order : "asc"}
                      onClick={createSortHandler(field)}
                      IconComponent={SortIcon}
                    >
                      <span>{column.label || capitalizeFirst(field)}</span>
                    </TableSortLabel>
                  </Tooltip>
                ) : (
                  <TableSortLabel
                    hideSortIcon={true}
                    active={false}
                    style={{ cursor: "auto" }}
                    IconComponent={SortIcon}
                  >
                    <span>{column.label}</span>
                  </TableSortLabel>
                )}
              </TableCell>
            );
          }
        })}
      </TableRow>
    </TableHead>
  );
});

export default DataTableHead;
