import type { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProp) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dissmiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
