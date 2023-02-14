import { forwardRef } from "react";
import "../App.css";

const UIForm = forwardRef(function UIForm(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      <span className="form-label">{label}</span>
      <span className="form-input">
        <input ref={ref} {...otherProps} />
      </span>
    </label>
  );
});

export default UIForm;
