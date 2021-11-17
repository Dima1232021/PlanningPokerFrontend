export function login() {
  fetch(`http://localhost:3000/authenticate/login`, {
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
  fetch(`http://localhost:3000/authenticate/create`, {
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
  fetch(`http://localhost:3000/authenticate/logged_in`, {
    credentials: "include",
    method: "GET",
  })
    .then((valu) => valu.json())
    .then((val) => console.log(val));
}

export function logout() {
  fetch(`http://localhost:3000/authenticate/logout`, {
    credentials: "include",
    method: "DELETE",
  })
    .then((valu) => valu.json())
    .then((val) => console.log(val));
}
