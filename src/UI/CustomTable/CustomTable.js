import {
  Checkbox,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import clsx from "clsx";
import keycode from "keycode";
import { get, isEmpty } from "lodash";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { compose } from "recompose";
import { toRem } from "../../utils/measurements";
import { PaginationContext } from "../withPagination";
import DataTableHead from "./DataTableHead";

const DEFAULT_ROW_PER_PAGE = [10, 50, 100];

const useStyles = makeStyles((theme) => ({
  tableWithFixedFirstCol: {
    borderCollapse: "separate",
  },
  fixedCol: {
    position: "sticky",
    backgroundColor: "#fff",
    zIndex: "10",
    left: 0,
  },
  icon: {
    color: "#E0E0E0",
  },
  tableMargin: {
    marginTop: 20 |> toRem,
    boxShadow: "unset",
  },
  scrollTable: {
    overflowX: "auto",
  },
  footerTable: {
    boxShadow: "-6.12323e-17px 0px 10px rgba(0, 0, 0, 0.25098)",
    position: "sticky",
    zIndex: 20,
  },
  rootChecked: {
    "&$checked": {
      color: "#0080FF",
    },
    color: "#BDBDBD",
  },
  checked: {},
  tableRowHighLight: {
    "&.MuiTableRow-root,&.MuiTableRow-hover": {
      backgroundColor: "rgba(0, 128, 255, 0.04)",
      "& > .MuiTableCell-root": {
        color: "unset",
        backgroundColor: "rgba(0, 128, 255, 0.04)",
      },
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "rgba(0, 128, 255, 0.04)",
    },
  },
  tableRow: {
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "rgba(0, 128, 255, 0.04)",
      "& > .MuiTableCell-root,MuiTableCell-hover": {
        color: "unset",
        backgroundColor: "rgba(0, 128, 255, 0.04)",
      },
    },
  },
}));

const CustomTable = compose(
  withStyles((them) => ({}), { name: "CustomTable" }),
)(
  React.forwardRef(
    /**
     *
     * @param {CustomTableProps} props
     * @param ref
     * @returns {JSX.Element}
     * @constructor
     */
    function CustomTable(props, ref) {
      const { className, component: Component = Paper } = props;
      const { paginationParams, setPaginationParams } = React.useContext(
        PaginationContext,
      );
      React.useEffect(() => {
        options.onSelected([]);
      }, [paginationParams]);
      const classesName = useStyles();
      const location = useLocation();
      const { classes, data, options: _options, lang } = props;
      const options = Object.assign(
        {
          selectable: true,
          selections: null,
          onSelected: null,
          pagination: true,
          renderEmpty: false,
          checkHighlight: null,
          enableCollapsibleCell: false,
          renderCollapse: null,
          disableTableHead: false,
        },
        _options,
      );

      const [selected, setSelected] = useState([]);
      options.selections = options.selections || selected;
      options.onSelected = options.onSelected || setSelected;
      const [activeCollapse, setActiveCollapse] = useState(null);

      const toggleCollapse = (id) => {
        if(activeCollapse===id) {
          setActiveCollapse(null);
        } else {
          setActiveCollapse(id);
        }
      }

      function handleRequestSort(e, property) {
        const sort = paginationParams?.sort;
        let sortType = isEmpty(sort) ? "" : sort.includes("asc");
        setPaginationParams?.(
          {
            sort: `${property},${sortType ? "desc" : "asc"}`,
          },
          "replaceIn",
        );
      }

      const handleSelectAllClick = (event, checked) => {
        if (checked && data?.records) {
          options.onSelected([...data.records]);
          return;
        }
        options.onSelected([]);
      };

      const handleSelectRow = React.useCallback(
        (event, record) => {
          event.stopPropagation();
          const newSelected = [...options.selections],
            index = newSelected.indexOf(record);

          if (index < 0) newSelected.push(record);
          else newSelected.splice(index, 1);

          /**
           * Set enable delete button if item is selected
           */
          options.onSelected(newSelected);
        },
        [options],
      );

      const handleKeyDown = (event, id) => {
        if (keycode(event) === "space") {
          handleSelectRow(event, id);
        }
      };

      let isSelected = React.useCallback(
        (record) => options.selections.indexOf(record) !== -1,
        [options.selections],
      );

      const { current: columnData } = React.useRef(
        Object.entries(props.columnData),
      );

      return (
        <Component className={classesName.tableMargin} ref={ref}>
          <div className={classes.tableWrapper}>
            <div className={classesName.scrollTable}>
              <Table
                className={clsx(classes.table, className, {
                  [classesName.tableWithFixedFirstCol]:
                    options.isFixedFirstColumn,
                })}
              >
                {!options?.disableTableHead && (
                  <DataTableHead
                    numSelected={options.selections.length}
                    list={columnData}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={data.records?.length}
                    location={location}
                    options={options}
                  />
                )}

                <TableBody>
                  {(data.records || data)?.map?.((record, recordIndex) => {
                    const isSelect = isSelected(record);
                    let isHighlight = false;
                    if (
                      options?.checkHighlight &&
                      typeof options.checkHighlight == "string"
                    ) {
                      isHighlight = record[options.checkHighlight];
                    } else if (
                      options?.checkHighlight &&
                      typeof options.checkHighlight == "function"
                    ) {
                      isHighlight = options.checkHighlight(record);
                    }
                    let isColl = activeCollapse === record.id;
                    return (
                      <React.Fragment>
                        <TableRow
                          key={`table-${record.id || recordIndex}`}
                          hover
                          role="checkbox"
                          classes={{
                            root: isHighlight
                              ? classesName.tableRowHighLight
                              : classesName.tableRow,
                          }}
                          aria-checked={isSelect}
                          onKeyDown={(event) => handleKeyDown(event, record.id)}
                          tabIndex={-1}
                          selected={isSelect}
                          data-cy={"customTable-row"}
                        >
                          {options?.enableCollapsibleCell && (
                            <TableCell
                              style={{ minWidth: "55px", maxWidth: "55px" }}
                              className={clsx({
                                [classesName.fixedCol]:
                                  options.isFixedFirstColumn,
                              })}
                            >
                              <IconButton
                                aria-label="expand row"
                                size="small"
                                style={{
                                  backgroundColor: isColl && "#ebf5ff",
                                }}
                                onClick={() => toggleCollapse(record.id)}
                              >
                                {isColl ? (
                                  <KeyboardArrowUpIcon />
                                ) : (
                                  <KeyboardArrowDownIcon />
                                )}
                              </IconButton>
                            </TableCell>
                          )}
                          {options.selectable && (
                            <TableCell
                              style={{
                                minWidth: toRem(55),
                                maxWidth: toRem(55),
                              }}
                              padding="checkbox"
                              className={clsx({
                                [classesName.fixedCol]:
                                  options.isFixedFirstColumn,
                              })}
                              style={{
                                ...(options.enableCollapsibleCell
                                  ? { left: toRem(55) }
                                  : {}),
                              }}
                            >
                              <div onClick={(e) => e.stopPropagation()}>
                                <Checkbox
                                  inputProps={{
                                    "data-cy": "customTable-rowCheck",
                                  }}
                                  onChange={(event) =>
                                    handleSelectRow(event, record)
                                  }
                                  classes={{
                                    root: classesName.rootChecked,
                                    checked: classesName.checked,
                                  }}
                                  checked={isSelect}
                                />
                              </div>
                            </TableCell>
                          )}

                          {columnData.map(([field, _column], index) => {
                            const column = Object.assign(
                              {
                                renderCell: (v) => v,
                                className: null,
                              },
                              _column,
                            );

                            return (
                              <TableCell
                                key={`table-${
                                  record.id || recordIndex
                                }-${field}`}
                                className={clsx(column.className, {
                                  [classesName.fixedCol]:
                                    index === 0 && options.isFixedFirstColumn,
                                })}
                                /**
                                 * Fix width the first column
                                 */
                                style={{
                                  ...(column.style || {
                                    width: index === 0 && toRem(140),
                                  }),
                                  ...(index === 0 &&
                                  options.isFixedFirstColumn &&
                                  options.selectable
                                    ? options.enableCollapsibleCell
                                      ? { left: toRem(110) }
                                      : { left: toRem(62) }
                                    : {}),
                                }}
                                align={column.align || "left"}
                              >
                                {column.renderCell(get(record, field), record)}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                        {options?.enableCollapsibleCell && (
                          <TableRow>
                            <TableCell
                              style={{
                                paddingBottom: 0,
                                paddingTop: 0,
                              }}
                              colSpan={
                                columnData.length +
                                (options.selectable ? 1 : 0) +
                                (options.enableCollapsibleCell ? 1 : 0)
                              }
                            >
                              <Collapse
                                in={isColl}
                                timeout="auto"
                                unmountOnExit
                                style={{
                                  width: "100%",
                                }}
                              >
                                {options.renderCollapse &&
                                  options.renderCollapse(record)}
                              </Collapse>
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
            {options.pagination === true && (
              <TablePagination
                className={classesName.footerTable}
                rowsPerPageOptions={DEFAULT_ROW_PER_PAGE}
                count={data.total_records ? parseInt(data.total_records) : 0}
                labelRowsPerPage={lang && lang.rowsPerPage}
                rowsPerPage={paginationParams?.size}
                page={paginationParams?.page}
                onChangePage={(_, page) =>
                  setPaginationParams?.({ page }, "pushIn")
                }
                SelectProps={{
                  classes: { icon: classesName.icon },
                }}
                onChangeRowsPerPage={(e) =>
                  setPaginationParams?.(
                    { size: e.target.value, page: 0 },
                    "replaceIn",
                  )
                }
                component="div"
              />
            )}
          </div>
        </Component>
      );
    },
  ),
);

export default CustomTable;
