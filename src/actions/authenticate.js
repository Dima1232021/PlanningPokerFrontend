import { API_URL } from "../config";
import {
  addUserDataAction,
  deleteUserDataAction,
  changeLoaderAuthAction,
} from "../reducers/userReducer";

export const login = (email, password) => {
  return (dispatch) => {
    try {
      fetch(`${API_URL}/authenticate/login`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: { email, password } }).then((value) =>
          value.json().then((data) => {
            console.log("authenticate", data);
          })
        ),
      });
    } catch (e) {}
  };
};

// export function login(email, password, addError) {
//   return (dispatch) => {
//     fetch(`${API_URL}/authenticate/login`, {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user: {
//           email,
//           password,
//         },
//       }),
//     })
// .then((value) =>
//   value.json().then((data) => {
//     console.log(data);
//     if (data.logged_in) {
//       return dispatch(addUserDataAction(data));
//     }
//     return addError(data.error);
//   })
// )
//       .catch((error) => addError("The server does not respond"));
//   };
// }

export function create(
  username,
  email,
  password,
  password_confirmation,
  addError
) {
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
            return dispatch(addUserDataAction(data));
          }
          return addError(data.error);
        })
      )
      .catch((error) => addError("The server does not respond"));
  };
}

export function logged_in() {
  return (dispatch) => {
    dispatch(changeLoaderAuthAction(true));
    fetch(`${API_URL}/authenticate/logged_in`, {
      credentials: "include",
      method: "GET",
    })
      .then((value) =>
        value.json().then((data) => {
          if (data.logged_in) {
            dispatch(addUserDataAction(data));
          }
          dispatch(changeLoaderAuthAction(false));
        })
      )
      .catch((error) => {
        console.log("Сервер не відповідає");
        dispatch(changeLoaderAuthAction(false));
      });
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
