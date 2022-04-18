import { LinearProgress, SvgIcon } from "@mui/material";
//@ts-ignore
import { ReactComponent as FileIconOutlined } from "../../../assets/icons/IcoFile.svg";
//@ts-ignore
import { ReactComponent as DeleteIcon } from "../../../assets/icons/IcoDelete.svg";
//@ts-ignore
import { ReactComponent as DownloadIcon } from "../../../assets/icons/IcoDownload.svg";
import clsx from "clsx";
import { uniqBy } from "lodash";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AttachmentDtoRes } from "../typings";
import { IAttachmentReducerStateItem } from "../typings";
//@ts-ignore
import css from "./FileUploader.module.scss";
import FileUploaderContext from "./FileUploaderContext";
//@ts-ignore
import { toRem } from "../utils";
import { truncate } from "../../../utils/string";
import { makeStyles } from "@mui/styles";
import { Theme } from "@material-ui/core";

const MAX_LENGTH = 30;

interface classes {
  [key: string]: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "10px",
    overflow: "hidden",
  },
  uploadItem: {
    overflow: "hidden",
    background: "#FBFBFB",
    marginTop: toRem(8),
    borderRadius: "10px",

    "& .RegFileIndicator-remove-btn svg": {
      marginRight: "0 !important",
      width: `${toRem(12)} !important`,
    },
    "& .RegFileIndicator-item-name": {
      padding: toRem(13),
      fontSize: toRem(12),
      lineHeight: toRem(16),
      fontWeight: 500,
      display: "flex",
      justifyContent: "space-between",
      //@ts-ignore
      color: theme.palette?.text?.bodyColor,

      "& span": {
        lineHeight: 0,
      },
      "& span:last-child": {
        lineHeight: 1.2,
        width: "12.65vw",
        wordBreak: "break-all",
        overflow: "hidden",
        whiteSpace: "nowrap",
        WebkitLineClamp: "1",
        textOverflow: "ellipsis",
        paddingRight: "5px",
        ["@media (min-width: 1550px)"]: {
          // eslint-disable-line no-useless-computed-key
          width: "13.55vw"
        },
      },
      "& > div": {
        display: "flex",
        alignItems: "center",
      },

      "& svg": {
        width: toRem(16),
        marginRight: toRem(9),
      },
    },
  },
  uploadedItem: {
    display: "flex",
    alignItems: "center",
    padding: toRem(13),
    justifyContent: "space-between",
    borderRadius: "10px",
    background: "#FBFBFB",
    marginTop: toRem(8),

    "& .RegFileIndicator-file-info": {
      fontWeight: "500",
      fontSize: toRem(12),
      lineHeight: 0,
      display: "flex",
      alignItems: "center",
      //@ts-ignore
      color: theme.palette?.text?.bodyColor,
      "& svg": {
        width: toRem(16),
        marginRight: toRem(9),
      },
      "& span:last-child": {
        lineHeight: 1.2,
        width: "12.35vw",
        wordBreak: "break-all",
        overflow: "hidden",
        whiteSpace: "nowrap",
        WebkitLineClamp: "1",
        textOverflow: "ellipsis",
        display: "inline-block",
        paddingRight: "5px",
        ["@media (min-width: 1550px)"]: {
          // eslint-disable-line no-useless-computed-key
          width: "13.33vw"
        },
      },
    },

    "& .RegFileIndicator-dowload svg": {
      width: toRem(18),
    },
  },
}));
interface FileUploaderIndicatorProps {
  onDelete: (args: AttachmentDtoRes[]) => void;
  value: AttachmentDtoRes[];
  onClose: (args: unknown) => void;
  onRemove: (args: unknown) => void;
  onDownload: (id: number, name: string) => void;
  classes: classes;
}

const FileUploaderIndicator = function FileUploaderIndicator(
  props: FileUploaderIndicatorProps,
) {
  const { classes = {} } = props;
  const styles = useStyles();
  const context = React.useContext(FileUploaderContext);
  const isInsideUploader = typeof context.onChange === "function";
  const uploadList = useSelector((state: any) =>
    Object.values(state?.attachment?.list[context.instanceId] || {}),
  );
  const dispatch = useDispatch();
  const finalValues = React.useMemo<
    Array<IAttachmentReducerStateItem | AttachmentDtoRes>
  >(() => {
    const uploaded = Object.values(uploadList)?.filter((item) => {
      return isInsideUploader ? item?.instanceId === context.instanceId : true;
    });
    const list = uniqBy([].concat(uploaded, props.value), "name");

    return list;
    // eslint-disable-next-line
  }, [props.value, uploadList]);

  React.useEffect(() => {
    if (props.value.length === 0 && props?.onClose) {
      dispatch(props.onClose({ id: context.instanceId }));
    }
    // eslint-disable-next-line
  }, [props.value]);

  const executeDownloadFile = (file: AttachmentDtoRes) => {
    props?.onDownload && props.onDownload(file.id, file.name);
  };

  return (
    <div className={clsx("RegFileIndicator-root", styles.root, classes?.root)}>
      {
        // eslint-disable-next-line
        finalValues.map((v) => {
          if (typeof v === "undefined") return null;
          if ("file" in v && v.file.name) {
            if (isInsideUploader)
              //v is IAttachmentItem
              return (
                <div
                  className={clsx(
                    "RegFileIndicator-upload-item",
                    styles.uploadItem,
                    classes.uploadItem,
                  )}
                >
                  <div
                    className={clsx(
                      "d-flex align-items-center flex-grow-1",
                      "RegFileIndicator-item-name",
                    )}
                    key={`${v.name}--uploading`}
                  >
                    <div>
                      <span
                        className={"d-inline-flex"}
                        style={{ flex: "0 0 auto" }}
                      >
                        <SvgIcon
                          viewBox="0 0 18 22"
                          component={FileIconOutlined}
                        />
                      </span>
                      <span>{v?.file?.name}</span>
                    </div>
                    <div
                      className={clsx(
                        "RegFileIndicator-remove-btn",
                        classes?.removeBtn,
                      )}
                      onClick={() => {
                        if (props?.onRemove) {
                          dispatch(
                            props.onRemove({
                              file: v.file,
                              id: context.instanceId,
                            }),
                          );
                        }

                        const afterDel = [...props.value],
                          index = afterDel.findIndex(
                            (i) => i?.name === v?.file?.name,
                          );
                        if (index >= 0) afterDel.splice(index, 1);
                        props.onDelete(afterDel);
                      }}
                    >
                      <SvgIcon
                        style={{ cursor: "pointer" }}
                        viewBox="0 0 10 10"
                        component={DeleteIcon}
                      ></SvgIcon>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "RegFileIndicator-progress",
                      classes?.progress,
                      v.progress === 100
                        ? "RegFileIndicator-progress__done"
                        : "",
                    )}
                  >
                    <LinearProgress
                      variant={"determinate"}
                      value={v.progress}
                    />
                  </div>
                </div>
              );
            return null;
          }

          if (!isInsideUploader) {
            return (
              <div
                className={clsx(
                  "RegFileIndicator-uploaded-item",
                  styles.uploadedItem,
                  classes.uploadedItem,
                )}
              >
                <span className={clsx("RegFileIndicator-file-info")}>
                  <span className="d-inline-flex">
                    <SvgIcon viewBox="0 0 18 22" component={FileIconOutlined} />
                  </span>
                  <span className={clsx("RegFileIndicator-file-info")}>
                    {v?.name}
                  </span>
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  className={clsx("RegFileIndicator-dowload")}
                  key={`${v.name}`}
                  onClick={() => {
                    executeDownloadFile(v as AttachmentDtoRes);
                  }}
                >
                  <SvgIcon viewBox="0 0 18 18" component={DownloadIcon} />
                </span>
              </div>
            );
          }
        })
      }
    </div>
  );
};

export default FileUploaderIndicator;
