import { makeStyles } from "@mui/styles";
import { IconButton, Typography } from "@mui/material";
import IntlMessages from "@protego/sdk/RegtankUI/v1/IntlMessages";
import { ReactComponent as AttachNote } from "assets/icons/AttachNote.svg";
import { ReactComponent as Multiply } from "assets/images/icons/Multiply.svg";
import React, { createRef, useEffect, useState } from "react";
import { Button } from "@protego/sdk/RegtankUI/v1/Button";
import { ReactComponent as AttachmentIconUpload } from "assets/icons/attachmentIconUpload.svg";
import NotificationDialog from "components/NotificationDialog";
import { FormattedHTMLMessage } from "react-intl";
import { ReactComponent as ErrorCirclIcon } from "assets/icons/errorCirclIcon.svg";

import styles from "./styles.module.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UploadButtons(props) {
  const { buttonUpload } = props;
  const FILE_ALLOW = "image/jpg, image/jpeg, image/png, application/pdf, application/csv, application/docx, application/xlxs";
  const [fileUploader, setFileUploader] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const fileRefImportKyt = createRef();
  const classes = useStyles();
  const FILE_SIZE = 5 * 1024 * 1024;
  const acceptFiles = props?.accept ? props.accept : FILE_ALLOW;

  const handleFileUpload = async () => {
    const files = Array.from(fileRefImportKyt.current.files);
    let allFiles = [];
    if (fileUploader && fileUploader.length > 0) {
      allFiles = Array.from(fileUploader);
      files.forEach((newFile) => {
        if (
          allFiles.filter((item) => item.name === newFile["name"]).length === 0
        ) {
          allFiles.push(newFile);
        }
      });
    } else {
      allFiles = files;
    }

    let isValid = true;
    allFiles.forEach((file) => {
      if (invalidateFile(file)) {
        isValid = false;
      }
    });

    if (!isValid) {
      setOpenDialog(true);
      return;
    }

    setFileUploader(allFiles);
  };

  const invalidateFile = (file) => {
    const acceptFiles = FILE_ALLOW;
    // file size
    if (file && file["size"] > FILE_SIZE) {
      return true;
    }

    // file format
    const acceptFileArr = acceptFiles.split(",").map(function (item) {
      return item.trim();
    });
    if(!acceptFileArr.includes(file["type"])) {
      return true;
    }

    return false;
  };

  const openFileUpload = () => {
    document.getElementById("contained-button-file").click();
  };

  const deleteFileUpload = (file) => {
    let listFile = Array.from(fileUploader);
    let deletedIndex = listFile.indexOf(file);

    listFile.splice(deletedIndex, 1);

    if (listFile.length > 0) {
      setFileUploader(listFile);
    } else {
      setFileUploader(null);
    }
    removeInputValue();
  };

  const removeInputValue = () => {
    document.getElementById("contained-button-file").value = null;
  };
  useEffect(() => {
    props.fileUploadCallback(fileUploader);
    // eslint-disable-next-line
  }, [fileUploader]);

  const onCloseConfirmModel = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <NotificationDialog
        open={openDialog}
        onPress={onCloseConfirmModel}
        icon={<ErrorCirclIcon />}
        title={<IntlMessages id="error" />}
        className={styles.notificationDialogWrapper}
        content={
          <>
            <Typography
              component={"h4"}
              className={styles.notificationDialogContentTitle}
            >
              <IntlMessages id="appModule.message.invalidUploadFileSize" />
            </Typography>
            <Typography
              component={"p"}
              className={styles.notificationDialogContentDetail}
            >
              <FormattedHTMLMessage id="supportForm.uploadFile.textFileFormat" />
            </Typography>
          </>
        }
      />
      <input
        className={classes.input}
        id="contained-button-file"
        onChange={handleFileUpload}
        type="file"
        multiple
        ref={fileRefImportKyt}
        accept={acceptFiles}
      />
      <div>
        <span className={styles.boxUploadFile}>
          <div onClick={() => openFileUpload()}>
            {buttonUpload ? (
              buttonUpload
            ) : (
              <Button
                variant={"outlined"}
                type={"button"}
                className={styles.uploadFileButton}
              >
                <AttachmentIconUpload />
                <IntlMessages id="supportFom.upload" />
              </Button>
            )}
          </div>
          <div className={styles.uploadFileText}>
            <FormattedHTMLMessage id="supportForm.uploadFile.textFileFormat" />
          </div>
        </span>
        {fileUploader !== null && (
          <div className={styles.boxListFile}>
            <div className={styles.boxListFileItem}>
              {Array.from(fileUploader).map((file) => {
                return (
                  <span
                    className="badge badge-secondary"
                    key={file.name}
                    style={{
                      background: "#F4F4F7",
                      color: "#0080FF",
                      padding: "5px 10px",
                      border: "1px solid #cccccc",
                      width: "180px",
                    }}
                  >
                    <span style={{ float: "left" }}>
                      <AttachNote /> &nbsp;
                    </span>

                    <span
                      style={{
                        float: "left",
                        width: "100px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        textAlign: "left",
                      }}
                      title={file.name}
                    >
                      {file.name} &nbsp;
                    </span>

                    <span style={{ float: "right" }}>
                      <IconButton
                        size={"small"}
                        onClick={() => deleteFileUpload(file)}
                      >
                        <Multiply />
                      </IconButton>
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
