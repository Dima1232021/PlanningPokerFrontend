import { API_URL } from "../config";

export function login() {
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
    .then((valu) => valu.json())
    .then((val) => console.log(val));
}

export function create() {
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
    .then((valu) => valu.json())
    .then((val) => console.log(val));
}

export function logged_in() {
  fetch(`${API_URL}/authenticate/logged_in`, {
    credentials: "include",
    method: "GET",
  })
    .then((valu) => valu.json())
    .then((val) => console.log(val));
}

export function logout() {
  fetch(`${API_URL}/authenticate/logout`, {
    credentials: "include",
    method: "DELETE",
  })
    .then((valu) => valu.json())
    .then((val) => console.log(val));
}
