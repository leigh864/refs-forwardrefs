import React, { forwardRef } from "react";
import UIForm from "../ui-form/uiForm";

const FSForm = forwardRef(function FSForm(props, ref) {
  return <UIForm {...props} ref={ref} />;
});

export default FSForm;
