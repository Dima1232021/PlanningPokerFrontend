import React from "react";
import { ActionCable } from "react-actioncable-provider";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useActions } from "../hooks";

const ListActionCable = () => {
  const history = useHistory();
  const { setIsDataGame, setAddInvitation, clearDataGame, deleteInvitation } = useActions();
  const { isAuth, userId } = useSelector((state) => state.auth);

  const gameId = useSelector((state) => state.game.gameId);

  if (isAuth) {
    return (
      <>
        <ActionCable
          channel={{ channel: "DeleteGameChannel", userId }}
          onReceived={(data) => {
            if (gameId === data.gameId) {
              clearDataGame();
              history.push("/");
            }
            deleteInvitation(data.gameId);
          }}
        />
        <ActionCable
          channel={{ channel: "InvitationChannel", userId }}
          onReceived={(data) => {
            setAddInvitation(data);
          }}
        />
        <ActionCable
          channel={{ channel: "GameChannel", gameId }}
          onReceived={(data) => {
            setIsDataGame(data);
          }}
        />
        <ActionCable
          channel={{ channel: "AnswersChannel", gameId }}
          onReceived={(data) => {
            setIsDataGame(data);
          }}
        />
        <ActionCable
          channel={{ channel: "StoriesChannel", gameId }}
          onReceived={(data) => {
            setIsDataGame(data);
          }}
        />
        <ActionCable
          channel={{ channel: "SetingsGameChannel", gameId }}
          onReceived={(data) => {
            setIsDataGame(data);
          }}
        />
        <ActionCable
          channel={{ channel: "DataUsersChannel", gameId }}
          onReceived={(data) => {
            setIsDataGame(data);
          }}
        />
      </>
    );
  }
  return null;
};

export default ListActionCable;
