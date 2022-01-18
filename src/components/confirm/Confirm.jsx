import React from "react";
import { useSelector } from "react-redux";
import "./confirm.scss";

export default function Confirm() {
  const { isActiveConfirm } = useSelector((state) => state.confirmation);
  return isActiveConfirm ? (
    <div className="confirm">
      <div className="confirm__form">
        <p className="confirm__text">rtxdcfvb</p>
        <div className="confirm__block">
          <button>false</button>
          <button>true</button>
        </div>
      </div>
    </div>
  ) : null;
}
