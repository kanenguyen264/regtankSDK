import React from "react";
import { usePrompt } from "@protego/sdk/UI/PromptDialog";
import Button from "@material-ui/core/Button";

function PromptDialogDynamicExample() {
  const [result, setResult] = React.useState("empty"),
    prompt = usePrompt({
      title: "Prompt example",
      message: <p>Click Yes/No button to show result</p>,
      actions: [{ value: "yes", color: "primary" }, "no", "cancel"],
    });

  return (
    <div>
      <p>
        Result is <strong>{result}</strong>
      </p>
      <Button
        variant={"contained"}
        onClick={async () => {
          setResult(
            await prompt(null, (end) => (payload) => {
              if (payload === "yes") {
                prompt.setProps({
                  message: <p>You've successfully clicked Yes button</p>,
                  actions: ["ok", "cancel"],
                });
                return false;
              } else end(payload);
            }),
          );
        }}
      >
        Click here to show prompt dialog
      </Button>
    </div>
  );
}

export default PromptDialogDynamicExample;
