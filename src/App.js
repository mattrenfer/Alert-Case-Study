import React from "react";
import "./App.css";
import { useAlertContext, ADD, REMOVE_ALL } from "./contexts/AlertContext";
import { Alert } from "@material-ui/lab";
import { AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";

export const Error = () => {
  const { alertDispatch } = useAlertContext();
  return (
    <div>
      <Button
        variant="contained"
        onClick={() =>
          alertDispatch({
            type: ADD,
            payload: {
              content: () => {
                return (
                  <div>
                    <Alert variant="filled" severity="error">
                      <AlertTitle>This is an ERROR alert</AlertTitle>
                    </Alert>
                  </div>
                );
              },
              type: "error",
            },
          })
        }
      >
        Error
      </Button>
    </div>
  );
};

export const Warning = () => {
  const { alertDispatch } = useAlertContext();
  return (
    <div>
      <Button
        variant="contained"
        onClick={() =>
          alertDispatch({
            type: ADD,
            payload: {
              content: () => {
                return (
                  <div>
                    <Alert variant="filled" severity="warning">
                      This is an WARNING alert!
                    </Alert>
                  </div>
                );
              },
              type: "warning",
            },
          })
        }
      >
        Warning
      </Button>
    </div>
  );
};

export const Info = () => {
  const { alertDispatch } = useAlertContext();
  return (
    <div>
      <Button
        variant="contained"
        onClick={() =>
          alertDispatch({
            type: ADD,
            payload: {
              content: () => {
                return (
                  <div>
                    <Alert variant="filled" severity="info">
                      This is an INFO alert!
                    </Alert>
                  </div>
                );
              },
              type: "info",
            },
          })
        }
      >
        Info
      </Button>
    </div>
  );
};

export const Success = () => {
  const { alertDispatch } = useAlertContext();
  return (
    <div>
      <Button
        variant="contained"
        onClick={() =>
          alertDispatch({
            type: ADD,
            payload: {
              content: () => {
                return (
                  <div>
                    <Alert variant="filled" severity="success">
                      This is a SUCCESS alert!
                    </Alert>
                  </div>
                );
              },
              type: "success",
            },
          })
        }
      >
        Success
      </Button>
    </div>
  );
};

export default function App() {
  const { alert, alertDispatch } = useAlertContext();
  function showClearAll() {
    if (alert.length) {
      return (
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            alertDispatch({
              type: REMOVE_ALL,
            })
          }
        >
          Remove Alerts
        </Button>
      );
    }
  }
  return (
    <div className="App">
      <Error />
      <Warning />
      <Info />
      <Success />

      <br />
      {showClearAll()}
    </div>
  );
}
