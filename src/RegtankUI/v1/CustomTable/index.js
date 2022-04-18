import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  SvgIcon,
} from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import clsx from "clsx";
import keycode from "keycode";
import { get, isEmpty } from "lodash";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { compose } from "recompose";
import { PaginationContext } from "../withPagination";
import DataTableHead from "./DataTableHead";
import { toRem } from "../utils";
import Checkbox from "../Checkbox";
import { ReactComponent as DropdownIcon } from "../../../assets/icons/IcoSelectArrow.svg";
import styles from "./style.module.scss";
import Pagination from "../Pagination";
import CustomScrollbar from "../Scrollbar";
import {ReactComponent as SelectIcon} from "assets/icons/IcoArrowDown.svg";

const DEFAULT_ROW_PER_PAGE = [10, 50, 100];

const Container = ({ scrollable = false, ...props }) => {
  return scrollable ? (
    <CustomScrollbar {...props}>{props.children}</CustomScrollbar>
  ) : (
    <div className={styles.container}>{props.children}</div>
  );
};

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
      const {
        className,
        component: Component = (props) => <div>{props.children}</div>,
      } = props;
      const { paginationParams, setPaginationParams } =
        React.useContext(PaginationContext);
      React.useEffect(() => {
        options.onSelected([]);
      }, [paginationParams]);
      const tableHeadRef = React.useRef();
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
          scrollable: false,
          disableShowing: true,
        },
        _options,
      );
      const [selected, setSelected] = useState([]);
      options.selections = options.selections || selected;
      options.onSelected = options.onSelected || setSelected;
      const [activeCollapse, setActiveCollapse] = useState(null);

      const toggleCollapse = (id) => {
        if (activeCollapse === id) {
          setActiveCollapse(null);
        } else {
          setActiveCollapse(id);
        }
      };

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
        <Component className={styles.tableMargin} ref={ref}>
          <div className={clsx(classes.tableWrapper, styles.tableWrapper)}>
            <Container
              className={styles.container}
              scrollable={options.scrollable}
              autoHeightMax={700}
              renderTrackVertical={(props) => {
                return (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      marginTop: tableHeadRef?.current?.clientHeight,
                    }}
                    className={styles.vCustomScrollBarTrack}
                  />
                );
              }}
              renderThumbVertical={(props) => {
                return (
                  <div {...props} className={styles.vCustomScrollBarThumb} />
                );
              }}
            >
              <Table className={clsx(classes.table, className, styles.table)}>
                {!options?.disableTableHead && (
                  <>
                    <DataTableHead
                      ref={tableHeadRef}
                      numSelected={options.selections.length}
                      list={columnData}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={data.records?.length}
                      location={location}
                      options={options}
                    />
                  </>
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
                              ? styles.tableRowHighLight
                              : styles.tableRow,
                          }}
                          aria-checked={isSelect}
                          onKeyDown={(event) => handleKeyDown(event, record.id)}
                          tabIndex={-1}
                          selected={isSelect}
                          data-cy={"customTable-row"}
                          className={isColl ? "expand" : ""}
                        >
                          {options?.enableCollapsibleCell && (
                            <TableCell
                              style={{ minWidth: "55px", maxWidth: "55px" }}
                            >
                              <IconButton
                                aria-label="expand row"
                                size="small"
                                style={{
                                  backgroundColor: "#ebf5ff",
                                }}
                                onClick={() => toggleCollapse(record.id)}
                                className={isColl ? "open" : ""}
                              >
                                {isColl ? (
                                  <KeyboardArrowUpIcon color="primary" />
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
                                ...(options.enableCollapsibleCell
                                  ? { left: toRem(55) }
                                  : {}),
                              }}
                              padding="checkbox"
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
                                    root: styles.rootChecked,
                                    checked: styles.checked,
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
                                className={clsx(column.className)}
                                /**
                                 * Fix width the first column
                                 */
                                style={{
                                  ...(column.style || {
                                    width: index === 0 && toRem(140),
                                  }),
                                  ...(index === 0 && options.selectable
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
                                borderBottom: 0,
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
            </Container>
            {options.pagination === true && (
              <div className={clsx(styles.footerTable, "RegTable-footer")}>
                <TablePagination
                  className={clsx(
                    styles.tablePagination,
                    styles.tablePagination__noPage,
                  )}
                  classes={{ menuItem: styles.selectLabel }}
                  rowsPerPageOptions={DEFAULT_ROW_PER_PAGE}
                  count={data.total_records ? parseInt(data.total_records) : 0}
                  labelRowsPerPage={lang && lang.rowsPerPage}
                  rowsPerPage={paginationParams?.size}
                  page={paginationParams?.page}
                  backIconButtonProps={{
                    style: { display: "none" },
                  }}
                  nextIconButtonProps={{
                    style: { display: "none" },
                  }}
                  labelDisplayedRows={
                    props?.labelDisplayedRows
                      ? props.labelDisplayedRows
                      : ({ from, to, count }) => {
                          return options?.disableShowing
                            ? `Showing ${from}–${to} of ${
                                count !== -1 ? count : `more than ${to}`
                              }`
                            : "";
                        }
                  }
                  SelectProps={{
                    classes: { icon: styles.icon },
                    IconComponent: () => {
                      return (
                        <SvgIcon viewBox="0 0 12 8" component={SelectIcon} />
                      );
                    },
                  }}
                  onRowsPerPageChange={(e) =>
                    setPaginationParams?.(
                      { size: e.target.value, page: 0 },
                      "replaceIn",
                    )
                  }
                  component="div"
                />

                <Pagination
                  pageRangeDisplayed={lang?.pageRangeDisplayed || 3}
                  pageCount={
                    data.total_records
                      ? Math.ceil(data.total_records / paginationParams?.size)
                      : 0
                  }
                  initialPage={paginationParams?.page || 0}
                  onChangePage={(page) => {
                    setPaginationParams?.({ page }, "pushIn");
                  }}
                />
              </div>
            )}
          </div>
        </Component>
      );
    },
  ),
);

export default CustomTable;
