import withPagination from "../withPagination";
import clsx from "clsx";
import { debounce } from "lodash";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import { parseQuery } from "../../../utils/string";
import styles from "./styles.module.scss";
import { ReactComponent as SearchDefaultIcon } from "../../../assets/icons/IcoSearch.svg";
import { ReactComponent as DeleteSearch } from "../../../assets/icons/DeleteSearch.svg";
import { SvgIcon } from "@mui/material";
import { FastField } from "formik";

const SearchBox = withPagination(function SearchBox(props) {
  const {
    placeholder,
    onChange,
    disableDebounce,
    noSearchParams,
    className,
    iconRight = false,
    searchIcon,
    iconDeleteSearch = false,
    searchSub = false,
  } = props;
  const intl = useIntl();
  const location = useLocation();
  const [search, setSearch] = useState(() =>
    noSearchParams ? "" : props.paginationParams.search ?? "",
  );
  const [isFocus, setIsFocus] = useState("");
  // eslint-disable-next-line
  const delayedSearch = useCallback(
    debounce((q) => changeSearch(q), 500),
    [location.search],
  );

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    onChange && onChange(event.target.value);
  };

  useEffect(() => {
    if (!searchSub && !noSearchParams) {
      const { search } = parseQuery(location.search);
      setSearch(search || "");
    }
  }, [location.search]);

  useEffect(() => {
    if (!disableDebounce && isFocus) {
      delayedSearch(search);
    }
    return () => clearTimeout(delayedSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const changeSearch = (value) => {
    props.setPaginationParams({ page: 0, search: value }, "replaceIn");
  };

  const onKeyPressed = (e) => {
    setIsFocus(e);
  };
  const resetSearch = () => {
    setSearch("");
    onChange && onChange("");
  };
  return (
    <div
      className={clsx(
        styles.container,
        `search-bar bg-transparent`,
        className,
        { [styles.iconRight]: iconRight },
        { [styles.inputFocused]: isFocus },
      )}
    >
      <div className="form-group">
        <input
          className={clsx(styles.input, "form-control")}
          type="search"
          onKeyDown={onKeyPressed}
          placeholder={
            placeholder
              ? placeholder
              : intl.formatMessage({
                  id: "appModule.search",
                })
          }
          onChange={handleSearchChange}
          value={search}
          onFocus={(e) => {
            setIsFocus(e);
          }}
          onBlur={() => {
            setIsFocus("");
          }}
        />

        <button
          style={{
            top: 0,
            bottom: 0,
          }}
          className="search-icon"
        >
          {searchIcon || (
            <SvgIcon viewBox={"0 0 18 18"} component={SearchDefaultIcon} />
          )}
        </button>
        {iconRight === false && iconDeleteSearch && (
          <button
            style={{
              top: 0,
              bottom: 0,
            }}
            className={clsx(styles.deleteIcon)}
            onClick={resetSearch}
          >
            <SvgIcon viewBox={"0 0 18 18"} component={DeleteSearch} />
          </button>
        )}
      </div>
    </div>
  );
});

export default SearchBox;
SearchBox.propTypes = {
  onChange: PropTypes.func,
};
SearchBox.defaultProps = {
  onChange: function () {},
};
