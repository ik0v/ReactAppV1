import React, { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProp) => {
  return (
    <>
      <div className={"alert alert-secondary alert-dismissible"}>
        <strong>Hello world</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
