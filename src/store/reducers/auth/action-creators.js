import axios from "axios";
import { API_URL } from "../../../config";
import { SET_IS_LOADING, SET_IS_AUTH } from "./auth";

export const authActionCreators = {
  setIsLoadingAction: (loading) => ({
    type: SET_IS_LOADING,
    payload: loading,
  }),
  setIsAuthAction: (user) => ({
    type: SET_IS_AUTH,
    payload: user,
  }),
  loginAction: (email, password, addError) => (dispatch) => {
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
      .then((value) => value.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        addError("The server does not respond");
      });
  },

  //   loginAction: (email, password, addError) => async (dispatch) => {
  //     try {
  //       dispatch(authActionCreators.setIsLoadingAction(true));
  //       const response = await axios.post(
  //         `${API_URL}/authenticate/login`,
  //         {
  //           user: { email, password },
  //         },
  //         {
  //           withCredentials: true,
  //           headers: {
  //             "Access-Control-Allow-Origin": "*",
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
};
