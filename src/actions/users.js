import { API_URL } from "../config";
import { addUsersAction } from "../reducers/usersReducer";

export function showUser() {
  return (dispatch) => {
    fetch(`${API_URL}/users/show`, {
      credentials: "include",
    }).then((value) =>
      value.json().then((data) => {
        dispatch(addUsersAction(data));
      })
    );
  };
}
