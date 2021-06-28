import React, { createContext, useReducer, useContext } from "react";
import { createPortal } from "react-dom";
import Alert from "../components/AlertManager";
import "../styles/alert.scss";

export const AlertContext = createContext();

const initialState = [];

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const REMOVE_ALL = "REMOVE_ALL";

// needs timeLimit, text, link, alertType, id, alertTitle

export const alertReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: +new Date(),
          content: action.payload.content,
          type: action.payload.type,
        },
      ];
    case REMOVE:
      return state.filter((a) => a.id !== action.payload.id);
    case REMOVE_ALL:
      return initialState;
    default:
      return state;
  }
};

export const AlertExample = (props) => {
  const [alert, alertDispatch] = useReducer(alertReducer, initialState);
  const alertData = { alert, alertDispatch };
  return (
    <AlertContext.Provider value={alertData}>
      {props.children}

      {createPortal(<Alert alert={alert} />, document.body)}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  return useContext(AlertContext);
};
