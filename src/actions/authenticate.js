import { API_URL } from "../config";
import {
  addUserDataAction,
  deleteUserDataAction,
} from "../reducers/userReducer";

export function login(email, password, addError) {
  return (dispatch) => {
    fetch(`${API_URL}/authenticate/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
      .then((value) =>
        value.json().then((data) => {
          console.log(data);
          if (data.logged_in) {
            dispatch(addUserDataAction(data));
          } else {
            addError(data.message);
          }
        })
      )
      .catch((error) => console.log("Сервер не відповідає"));
  };
}

export function create(username, email, password, password_confirmation) {
  return (dispatch) => {
    fetch(`${API_URL}/authenticate/create`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          password_confirmation,
        },
      }),
    })
      .then((value) =>
        value.json().then((data) => {
          console.log(data);
          if (data.logged_in) {
            dispatch(addUserDataAction(data));
          }
        })
      )
      .catch((error) => console.log("Сервер не відповідає"));
  };
}

export function logged_in() {
  return (dispatch) => {
    fetch(`${API_URL}/authenticate/logged_in`, {
      credentials: "include",
      method: "GET",
    })
      .then((value) =>
        value.json().then((data) => {
          console.log(data);
          if (data.logged_in) {
            dispatch(addUserDataAction(data));
          }
        })
      )
      .catch((error) => console.log("Сервер не відповідає"));
  };
}

export function logout() {
  return (dispatch) => {
    fetch(`${API_URL}/authenticate/logout`, {
      credentials: "include",
      method: "DELETE",
    })
      .then((value) =>
        value.json().then((data) => {
          console.log(data);
          if (data.logged_out) {
            dispatch(deleteUserDataAction());
          }
        })
      )
      .catch((error) => console.log("Сервер не відповідає"));
  };
}
