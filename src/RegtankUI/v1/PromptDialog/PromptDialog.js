import React from "react";
import Dialog from "../Dialog/Dialog";
import { ProtegoContext } from "../../../core/ProtegoProvider/ProtegoProvider";

const PromptDialog = ({ onClose, selected }) => {
  const { title, okText, content} = selected;
  const [open, setOpen] = React.useState(true);
  const handleClose = (event) => {
    setOpen(false);
    onClose && onClose();
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      allowCloseOnTitle={true}
      maxWidth={"small"}
      width={500}
      okProps={{
        text: okText,
        onClick: handleClose,
      }}
    >
      { content }
    </Dialog>
  );
};

const usePromptDialog = (props) => {
  const { addComponent, removeComponent } = React.useContext(ProtegoContext);
  return (selected) => {
    return new Promise((resolve) => {
      const key = new Date().getTime() + "_dialog";
      const onClose = () => {
        removeComponent({ key: key });
        resolve();
      };

      addComponent({
        key: key,
        component: <PromptDialog selected={selected} onClose={onClose}/>,
      });
    });
  };
};

export default usePromptDialog;
