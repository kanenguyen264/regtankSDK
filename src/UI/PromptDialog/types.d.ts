import { PromptDialogAction, PromptDialogProps } from "./PromptDialog";
import React from "react";

interface UsePromptHookParamType
  extends Omit<
    PromptDialogProps,
    "innerRef" | "children" | "open" | "onClose"
  > {
  title: React.ReactNode;
  message: React.ReactNode;
  actions: PromptDialogAction[];
}
