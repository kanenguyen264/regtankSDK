//@flow
import React from "react";
import { useDispatch } from "react-redux";
// import { FileUploadProps } from "../typings";
import FileUploaderContext from "./FileUploaderContext";
import FileUploaderIndicator from "./FileUploaderIndicator";
// import FileUploaderService from "../../services/FileUploaderService";
import PromptDialog from "../PromptDialog/PromptDialog";
import { Icon, Typography } from "@mui/material";
import { ReactComponent as ErrorCirclIcon } from "assets/icons/errorCirclIcon.svg";
import IntlMessages from "@protego/sdk/RegtankUI/v1/IntlMessages";
import { FormattedHTMLMessage } from "react-intl";

const FILE_ALLOW = "image/jpg, image/jpeg, image/png, application/pdf, application/csv, application/docx, application/xlxs";
const FILE_SIZE = 5 * 1024 * 1024;

/**
 *
 * @param {FileUploaderProps} props
 * @returns {null}
 * @constructor
 */
function FileUploader(props) {
  const { children, id, actions = null } = props;
  const uploadDispatch = useDispatch();
  const onCompleted = React.useRef(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const usePromptDialog = PromptDialog();

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

  const displayErrorDialog = async () => {
    await usePromptDialog({
      title: {
        text: "Error",
        icon: <Icon component={ErrorCirclIcon} color="error" />,
      },
      okText: "OK",
      content: (
        <div>
          <Typography
            component={"div"}
          >
            <IntlMessages id="appModule.message.invalidUploadFileSize" />
          </Typography>
          <Typography
            component={"div"}
          >
            <FormattedHTMLMessage id="supportForm.uploadFile.textFileFormat" />
          </Typography>
        </div>
      ),
    });
  };

  const attachFile = (e) => {
    const files = Array.from(e.target.files);
    for (let i = 0; i < files.length; i++) {
      if (invalidateFile(files[i])) {
        displayErrorDialog();
        return;
      }
    }
    if (actions?.add) {
      uploadDispatch(
        actions.add({
          id,
          files: e.target.files,
        }),
      );
    }

    // noinspection JSIgnoredPromiseFromCall
    Promise.all(
      files.map(async (file) => {
        const form = new FormData();
        form.append("files", file);
        const config = {
          onUploadProgress(e) {
            const percentage = Math.round((e.loaded * 100) / e.total);
            if (actions?.progress) {
              uploadDispatch(
                actions?.progress({ file, progress: percentage, id }),
              );
            }
          },
        };

        if (actions?.post) {
          return actions.post(form, config).then((response) => {
            const responseData = response.data[0];
            if (actions?.complete) {
              uploadDispatch(actions.complete({ file, id }));
            }
            return responseData;
          });
        }
      }),
    ).then((fullList) => {
      onCompleted.current(fullList);
    });
    // .finally(() => {
    //   e?.target?.value = "";
    // });
  };

  return (
    <FileUploaderContext.Provider
      value={{
        onChange: attachFile,
        onCompleted: onCompleted.current,
        setOnCompleted: (cb) => {
          onCompleted.current = cb;
        },
        instanceId: id,
      }}
    >
      {children}
    </FileUploaderContext.Provider>
  );
}

FileUploader.FileUpload = function FileUpload(props) {
  const context = React.useContext(FileUploaderContext),
    onChange =
      typeof context.onChange === "function"
        ? (...args) => {
            context.setOnCompleted(props.onCompleted);
            context.onChange(...args);
          }
        : props.onChange,
    { multiple, accept, children } = props;

  return (
    <>
      <input
        style={{ display: "none" }}
        id={context.instanceId}
        accept={accept || FILE_ALLOW}
        multiple={multiple}
        type={"file"}
        onChange={onChange}
      />
      <label htmlFor={context.instanceId}>
        {React.cloneElement(React.Children.only(children), {
          component: "span",
        })}
      </label>
    </>
  );
};
FileUploader.Indicator = FileUploaderIndicator;

export default FileUploader;
