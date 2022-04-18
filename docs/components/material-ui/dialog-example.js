import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseableDialogTitle from "../../../src/UI/CloseableDialogTitle/CloseableDialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const DialogExample = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        variant={"contained"}
        color={"primary"}
        onClick={() => setOpen(true)}
      >
        Open dialog
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <CloseableDialogTitle onClose={() => setOpen(false)}>
          Upload a File
        </CloseableDialogTitle>
        <DialogContent>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut
            consequatur consequuntur cupiditate dolore eaque error, est fuga id
            incidunt labore laboriosam officiis quaerat quas, quis repellendus
            sint vel voluptatem?
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogExample;
