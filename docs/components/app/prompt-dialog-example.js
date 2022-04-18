import React from "react";
import { usePrompt } from "@protego/sdk/UI/PromptDialog";
import Button from "@material-ui/core/Button";

function PromptDialogExample() {
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
          setResult(await prompt());
        }}
      >
        Click here to show prompt dialog
      </Button>
    </div>
  );
}

export default PromptDialogExample;
