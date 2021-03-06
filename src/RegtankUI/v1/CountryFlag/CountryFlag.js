import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import {
  CountryList,
  CountryListCN,
  CountryListDJEN,
  CountryListDJCN,
} from "../../../consts";
import Tooltip from "../Tooltip";
import { toRem } from "../utils";
const DEFAULT_CDN_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/";
const DEFAULT_CDN_SUFFIX = "svg";
import FlagYugoslavia from "../../../assets/icons/flag/yugoslavia.svg";
import NetherlandsAntilles from "../../../assets/icons/flag/netherlands_antilles.svg";
import Abkhazia from "../../../assets/icons/flag/abkhazia.svg";

const OFFSET = 127397;

const useStyles = makeStyles(
  (theme) => {
    const pxToRem = (props) => theme.typography.pxToRem(props.size || 24);
    return {
      root: {
        display: "inline-block",
        verticalAlign: "middle",
        "span&": { fontSize: pxToRem, lineHeight: pxToRem },
        "img&": { width: pxToRem, objectFit: "cover" },
        "& +span": {
          lineHeight: theme.typography.pxToRem(16),
          marginLeft: theme.typography.pxToRem(6),
        },
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.16)",
      },
      tooltipArrow: {
        "& .MuiTooltip-arrow": {
          marginTop: "-0.6em !important",
        },
      },
    };
  },
  { name: "MuiCountryFlag" },
);

function CountryFlagWithTooltip({
  disableTooltip,
  countryCode,
  children,
  displayCountryName,
  demonym,
  countryList,
  language,
}) {
  if (disableTooltip) return children;

  const classes = useStyles();
  const getCountryName = () => {
    const object = countryList.find((i) => i.code === countryCode);
    if (demonym) return object?.demonym;
    else return object?.name;
  };

  useEffect(() => {
    getCountryName();
  }, [language]);

  const countryName = useMemo(() => {
    return getCountryName();
  }, [getCountryName]);

  return (
    <Tooltip
      title={countryName}
      placement="top-start"
      arrow
      classes={{ tooltipArrow: classes.tooltipArrow }}
    >
      <span className="mr-2">
        {children}
        {displayCountryName && <span>{countryName}</span>}
      </span>
    </Tooltip>
  );
}
function CountryFlag({
  cdnSuffix,
  cdnUrl,
  countryCode,
  svg,
  className,
  size,
  disableTooltip = false,
  displayCountryName = false,
  demonym = false,
  djwl = false,
  splitBy = "/",
  language,
  ...props
}) {
  /**
   * function check input country
   * If country name will convert country code
   * If nationality  will convert country code
   */
  const getCountryCode = (name) => {
    const object = countryList.find((i) => {
      if (
        i.code === countryCode ||
        i.name === countryCode ||
        i.demonym === countryCode
      ) {
        return i;
      }
    });
    return object && object?.code;
  };

  const getCountryName = (code) => {
    const object = countryList.find((i) => {
      if (
        i.code === countryCode ||
        i.name === countryCode ||
        i.demonym === countryCode
      ) {
        return i;
      }
    });
    return object && object?.name;
  };

  const classes = useStyles({ size });
  if (typeof countryCode !== "string") {
    return null;
  }

  let countryList;
  switch (language) {
    case "en":
      countryList = djwl ? CountryListDJEN : CountryList;
      break;
    case "cn":
      countryList = djwl ? CountryListDJCN : CountryListCN;
      break;
    default:
      countryList = djwl ? CountryListDJEN : CountryList;
      break;
  }

  let countryCodeConvert = getCountryCode(countryCode);
  const countryCodeArr = countryCodeConvert
    ? countryCodeConvert?.split(splitBy)
    : "";
  if (countryCodeArr === null || countryCodeArr.length === 0) return "-";
  return countryCodeArr.map((itemCode) => {
    let flagCode = itemCode;
    switch (itemCode) {
      case "BU":
        flagCode = "MM";
        break;
      case "VAT":
        flagCode = "VA";
        break;
      default:
        break;
    }
    let flagUrl = `${cdnUrl}${flagCode.toLowerCase()}.${DEFAULT_CDN_SUFFIX}`;
    switch (flagCode) {
      case "YU":
        flagUrl = FlagYugoslavia;
        break;
      case "AN":
        flagUrl = NetherlandsAntilles;
        break;
      case "AB":
        flagUrl = Abkhazia;
        break;
      case "NOTK":
        flagUrl = null;
      default:
        break;
    }

    if (svg) {
      return (
        <CountryFlagWithTooltip
          disableTooltip={disableTooltip}
          countryCode={itemCode}
          displayCountryName={displayCountryName || !flagUrl}
          demonym={demonym}
          key={itemCode}
          language={language}
          countryList={countryList}
        >
          {flagUrl ? (
            <>
              <img
                src={flagUrl}
                style={{ marginRight: toRem(8), borderRadius: 2 }}
                alt={itemCode}
                className={clsx(classes.root, className)}
                onError={(event) => {
                  event.target.style.display = "none";
                }}
                {...props}
              />
              {(displayCountryName && disableTooltip) && <span> {getCountryName(countryCode)} </span>}
            </>
          ) : (
            <></>
          )}
        </CountryFlagWithTooltip>
      );
    }

    const emoji = itemCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + OFFSET),
      );

    return (
      <CountryFlagWithTooltip
        disableTooltip={disableTooltip}
        countryCode={itemCode}
        displayCountryName={displayCountryName}
        demonym={demonym}
      >
        <span role="img" className={clsx(classes.root, className)} {...props}>
          {emoji}
        </span>
      </CountryFlagWithTooltip>
    );
  });
}

CountryFlag.propTypes = {
  /**
   * @ignore
   */
  cdnUrl: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * M?? qu???c gia c???a l?? c??? mu???n hi???n th??? (?????nh d???ng 2 k?? t???). Tra c???u t???i [https://countrycode.org/]()
   */
  countryCode: PropTypes.string.isRequired,
  /**
   * Kh??ng s??? d???ng tooltip khi hover mouse qua icon l?? c???
   */
  disableTooltip: PropTypes.bool,
  /**
   * K??ch th?????c c???a icon, t??nh b???ng pixel. M???c ?????nh l?? 24
   */
  size: PropTypes.number,
  /**
   * ?????nh d???ng hi???n th??? c???a component (m???c ?????nh l?? `false` s??? hi???n th??? d?????i d???ng Emoji) test
   */
  svg: PropTypes.bool,
  splitBy: PropTypes.string,
};

CountryFlag.defaultProps = {
  cdnUrl: DEFAULT_CDN_URL,
  svg: false,
  size: 24,
};

export default CountryFlag;
