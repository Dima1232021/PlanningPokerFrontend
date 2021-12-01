import React from "react";
import { ActionCable } from "react-actioncable-provider";
import CreateGame from "./createGame/CreateGame";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActveFormAction,
  addGameInvitationAction,
  deleteInvitationAction,
} from "../../reducers/gamesReducer";

import "./main.scss";
import InformationForms from "./InformationForms";

export default function MainPage() {
  const dispatch = useDispatch();
  const activeForm = useSelector((state) => state.games.activeForm);
  const userid = useSelector((state) => state.user.userid);

  return (
    <div className="main">
      <ActionCable
        channel={{
          channel: "ShowingGameRequestsChannel",
          user: userid,
        }}
        onReceived={(value) => {
          dispatch(addGameInvitationAction(value));
        }}
      />
      <ActionCable
        channel={{
          channel: "DeleteInvitationChannel",
          user: userid,
        }}
        onReceived={(value) => {
          dispatch(deleteInvitationAction(value.invitation_id));
        }}
      />

      <div className="container">
        <InformationForms />

        <div className="main__row">
          {!activeForm ? (
            <button
              className="main__btn-create"
              onClick={() => dispatch(changeActveFormAction(true))}
            >
              Створити нову гру
            </button>
          ) : (
            <CreateGame />
          )}
        </div>
      </div>
    </div>
  );
}
