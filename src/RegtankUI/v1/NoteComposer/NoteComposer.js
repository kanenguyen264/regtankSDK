import { Button, IconButton, SvgIcon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Field, Form, Formik, useFormik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { compose } from "recompose";
import { ReactComponent as AttachFileIcon } from "../../../assets/icons/IcoAttachment.svg";
import { formatDate, LONG_DATE_TIME } from "../../../utils/date";
import IntlMessages from "../../../utils/intl";
import FileUploader from "../FileUploader";
import JRCard from "../JRCard";
import LoadingWrapper from "../LoadingWrapper";
import CustomScrollbar from "../Scrollbar";
import { toRem } from "../utils";
import withNoteFetcher from "../withNoteFetcher";
import ThemeColors from "../constants/ThemeColors";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff",
    "& .RegCard-body": {
      padding: "0 !important",
      marginTop: toRem(14),
    },
  },
  content: {
    boxSizing: "border-box",

    "& > div": {
      boxShadow: "none",
    },

    "& .RegFileIndicator-root:not(:empty)": {
      paddingBottom: toRem(14),
    },
  },
  descriptionText: {
    fontSize: toRem(12),
    color: ThemeColors.default,
  },
  form: {
    "& textarea": {
      border: `1px solid ${ThemeColors.grayBorder}`,
      boxSizing: "border-box",
      borderRadius: "6px",
      width: "100%",
      outline: "0 !important",
      padding: `${toRem(12)} ${toRem(16)}`,
      marginBottom: toRem(1),
      fontSize: toRem(14),
      position: "relative",
      color: ThemeColors.bodyText,
      "&::placeholder": {
        fontSize: toRem(14),
        fontStyle: "italic",
        lineHeight: toRem(20),
        color: "#ABB4BD",
      },
      "&:hover": {
        borderColor: ThemeColors.default,
      },
      "&:focus": {
        borderColor: ThemeColors.primary,
        // borderColor: "transparent !important",
        // boxShadow: `0 0 0 1pt ${ThemeColors.primary}`,
      },
    },
    "& label .MuiButtonBase-root": {
      width: "30px",
      height: "30px",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: toRem(14),
    marginTop: toRem(16),

    "& .MuiButton-root": {
      minHeight: toRem(40),
      backgroundColor: "#0080FF",
      fontWeight: "500",
      fontSize: toRem(14),
      lineHeight: toRem(20),
      padding: `${toRem(8)} ${toRem(16)}`,
      color: "#FFFFFF",
      marginRight: "0 !important",
      "&:disabled": {
        backgroundColor: "#dddddd",
      },
    },

    "& .MuiSvgIcon-root": {
      width: toRem(16),
    },

    "& .RegNote-spacer": {
      width: "1px",
      height: toRem(20),
      background: "#F4F4F6",
      marginLeft: toRem(5),
      marginRight: toRem(10),
    },
  },
  item: {
    padding: `${toRem(16)} 0`,
    borderBottom: "1px solid #F4F4F6",
    "& .RegNote-item-content": {
      fontWeight: "500",
      fontSize: toRem(14),
      lineHeight: toRem(16),
      color: "rgba(35, 35, 35, 0.9)",
      marginBottom: toRem(5),
    },
    "& .RegNote-item-date": {
      fontWeight: "500",
      fontSize: toRem(12),
      lineHeight: toRem(20),
      color: "#606E7B",
    },
  },
  attachments: {
    boxSizing: "border-box",
  },
}));

const NoteComposer = compose(withNoteFetcher)(
  /**
   *
   * @param {NoteComposerProps} props
   * @returns {JSX.Element}
   * @constructor
   */
  function NoteComposer(props) {
    const {
      notes,
      id: typeId,
      saver,
      classes,
      // service,
      addNoteCallbackRef,
      className,
      containerHeight,
      type,
      placeholder,
      rows = 3,
      scrollable = false,
      scrollBarProps = {},
      afterSaved,
    } = props;
    const dispatch = useDispatch();
    const { formatMessage } = useIntl();
    const [isFocus, setIsFocus] = React.useState("");
    const [isAdd, setAdd] = React.useState(
        // process.env.NODE_ENV === "development"
        true,
      ),
      [adding, setAdding] = React.useState(false),
      fm = useFormik({
        initialValues: {
          note: "",
        },
      });
    const containerEl = React.useRef(null);
    const textAreaEl = React.useRef(null);
    const [maxHeight, setMaxHeight] = React.useState(containerHeight);
    const styles = useStyles();

    const addNote = () => {
      fm.resetForm();
      setAdd(true);
      setAdding(false);
    };
    const doAddNote = async (note) => {
      setAdding(true);
      try {
        await dispatch(saver({ id: typeId, body: note }));
        afterSaved && dispatch(afterSaved);
      } catch {
      } finally {
        setAdding(false);
      }
    };

    React.useEffect(() => {
      if (addNoteCallbackRef?.current) addNoteCallbackRef.current = addNote;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
      if (containerHeight) {
        let fs = parseFloat(
          getComputedStyle(document.documentElement).fontSize,
        );
        const newHeight =
          containerHeight - (withoutOutsideCard ? 10 : fs * 4.85);
        setMaxHeight(newHeight);
      }
      // eslint-disable-next-line
    }, [containerHeight, containerEl]);

    const form = isAdd && (
      <FileUploader id={type} actions={props?.uploader}>
        <Formik
          initialValues={{
            content: "",
            attachments: [],
          }}
          onSubmit={(values, { setFieldValue }) => {
            doAddNote(values).then(() => {
              setFieldValue("attachments", []);
              setFieldValue("content", "");
            });
          }}
        >
          {({ values, handleChange, setFieldValue }) => (
            //
            <React.Fragment>
              <LoadingWrapper loading={adding}>
                <JRCard dense>
                  <Form
                    className={clsx("RegNote-form", styles.form, classes?.form)}
                  >
                    <Field
                      innerRef={textAreaEl}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className={clsx(
                        "RegNote-input",
                        styles.input,
                        classes?.input,
                      )}
                      placeholder={
                        placeholder ?? formatMessage({ id: "write-a-note" })
                      }
                      as={"textarea"}
                      rows={rows}
                      name={"content"}
                      onFocus={(e) => setIsFocus(e)}
                      onBlur={() => setIsFocus("")}
                    />
                    <div className={styles.descriptionText}>
                      File format: jpg, jpeg, png, pdf, csv, docx, xlxs <br />
                      File Size Limit: 5mb
                    </div>
                    <div
                      className={clsx(
                        "RegNote-buttons",
                        styles.buttons,
                        classes?.buttons,
                      )}
                    >
                      <FileUploader.FileUpload
                        multiple={false}
                        id={"note-upload"}
                        onCompleted={(e) => {
                          if (e !== null)
                            setFieldValue("attachments", [
                              ...(values.attachments || []),
                              ...e,
                            ]);
                        }}
                      >
                        <IconButton
                          size={"small"}
                          className={styles.NoteAttach}
                        >
                          <SvgIcon
                            viewBox="0 0 16 20"
                            component={AttachFileIcon}
                          />
                        </IconButton>
                      </FileUploader.FileUpload>
                      <div style={{ marginLeft: toRem(10) }}>
                        <Button
                          variant={"contained"}
                          size={"small"}
                          className={"mr-2"}
                          disabled={values.content.length === 0}
                          type={"submit"}
                        >
                          <IntlMessages id="appModule.add.note" />
                        </Button>
                      </div>
                    </div>
                  </Form>
                </JRCard>
              </LoadingWrapper>
              <div
                className={clsx(
                  "RegNote-upload",
                  styles.upload,
                  classes?.upload,
                )}
              >
                <FileUploader.Indicator
                  value={values.attachments}
                  onDelete={(e) => setFieldValue("attachments", e)}
                  onClose={props?.uploader?.close}
                  onRemove={props?.uploader?.remove}
                  onDownload={props?.download}
                />
              </div>
            </React.Fragment>
          )}
        </Formik>
      </FileUploader>
    );

    let list = (
      <div className="RegNote-items">
        {Array.isArray(notes) &&
          notes.map((note) => (
            <div
              className={clsx(
                "d-flex RegNote-item",
                styles.item,
                classes?.item,
              )}
              key={note.id}
            >
              <div className={"flex-grow-1"}>
                <div>
                  <Typography
                    className={clsx("RegNote-item-content")}
                    noWrap={false}
                  >
                    {note.content}
                  </Typography>
                </div>
                <Typography className={clsx("RegNote-item-date")}>
                  {formatDate(note.createdAt, LONG_DATE_TIME)}
                </Typography>

                <FileUploader.Indicator
                  value={note.attachments}
                  className={
                    ("RegNote-attachments",
                    styles.attachments,
                    classes?.attachments)
                  }
                  onDownload={props?.download}
                />
              </div>
            </div>
          ))}
      </div>
    );

    if (scrollable)
      list = <CustomScrollbar {...scrollBarProps}>{list}</CustomScrollbar>;

    return (
      <div
        className={clsx("RegNote-root", styles.root, classes?.root, className)}
      >
        <div
          className={clsx("RegNote-content", styles.content, classes?.content)}
          style={containerHeight ? { height: maxHeight } : {}}
          ref={containerEl}
        >
          {form}
          {list}
        </div>
      </div>
    );
  },
);

NoteComposer.propTypes = {
  buttonsPosition: PropTypes.oneOf(["default", "inline"]),
};

export default NoteComposer;
