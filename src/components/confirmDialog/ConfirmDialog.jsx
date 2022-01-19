import React from "react";
import { useConfirm } from "../../hooks";
import "./confirm.scss";

const ConfirmDialog = () => {
  const { onConfirm, onCancel, confirmState } = useConfirm();

  return confirmState.show ? (
    <div className="confirm">
      <div className="confirm__dialog">
        <p className="confirm__text">{confirmState.text}</p>
        <div className="confirm__footer">
          <div className="confirm__btn btn" onClick={onConfirm}>
            Yes
          </div>
          <div className="confirm__btn btn" onClick={onCancel}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default ConfirmDialog;
