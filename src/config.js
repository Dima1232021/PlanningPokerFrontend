// "start": "PORT=3001 react-scripts start",
// export const API_URL = "https://devserver.test";
// export const API_WS_URL = "wss://devserver.test/cable";
export const API_URL = "https://planning-poker-backend-atom.herokuapp.com";
export const API_WS_URL = "wss://planning-poker-backend-atom.herokuapp.com/cable";

export const bodyFetch = (url, data = false) => {
  if (data) {
    return [
      `${API_URL}${url}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: data && JSON.stringify(data),
      },
    ];
  }
  return [
    `${API_URL}${url}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    },
  ];
};
