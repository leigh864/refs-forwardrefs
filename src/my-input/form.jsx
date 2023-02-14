import React, { useRef, useEffect } from "react";
import FSForm from "../fs-form/fsForm";

const Form = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const handleClick = () => {
    ref2.current.focus();
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <div className="explanation">
        <p>On loading the first element will be in FOCUS</p>
        <p>
          the 2nd element does not pass a reference and only if focus is
          selected
        </p>
        <p>Click the edit button and the third element will be in FOCUS</p>
      </div>
      <form className="form">
        <div>
          <FSForm label="Enter your name:" ref={ref} />
        </div>
        <div>
          <FSForm label="Enter your sort code:" />
        </div>
        <div>
          <FSForm label="Enter your phone number:" ref={ref2} />
        </div>
        <button className="button" type="button" onClick={handleClick}>
          Edit
        </button>
      </form>
    </>
  );
};

export default Form;
