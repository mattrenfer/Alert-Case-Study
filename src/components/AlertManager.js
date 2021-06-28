import React from "react";
import { useAlertContext, REMOVE } from "../contexts/AlertContext";

export default function Alert({ alert }) {
  const { alertDispatch } = useAlertContext();
  function renderItem(content) {
    return content();
  }
  return (
    <div className="alert">
      {alert.map((a) => {
        return (
          <div className={`${a.type ? a.type : ""}`} key={a.id}>
            <span
              role="img"
              aria-label="close alert"
              className="alert-close"
              onClick={() =>
                alertDispatch({ type: REMOVE, payload: { id: a.id } })
              }
            >
              &times;
            </span>
            {renderItem(a.content)}
          </div>
        );
      })}
    </div>
  );
}
