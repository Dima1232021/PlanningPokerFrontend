export const SET_IS_LOADING_GAME = "SET_IS_LOADING_GAME";
export const SET_JOIN_THE_GAME = "JOIN_THE_GAME";

const initialState = {
  isLoaderPage: false,
  joinTheGame: false,
  gameId: null,
  driving: { id: null, name: "" },
  historyNumber: 0,
  invitedUsers: [],
  onlineUsers: [],
  onlinePlayers: [],
  stories: [],
  answers: {},
};

export const gameReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_GAME:
      console.log("SET_IS_LOADING_GAME", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
