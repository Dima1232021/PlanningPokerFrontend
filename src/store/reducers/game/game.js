export const SET_IS_LOADING_GAME = "SET_IS_LOADING_GAME";
export const SET_JOIN_THE_GAME = "JOIN_THE_GAME";
export const SET_IS_ACTIVE_MENU = "SET_IS_ACTIVE_MENU";
export const CLEARE_DATA_GAME = "CLEARE_DATA_GAME";
export const SET_IS_ACTIVE_PAGE = "SET_IS_ACTIVE_PAGE";

const initialState = {
  gameYouHaveJoined: { urlGame: "", nameGame: "", joinTheGame: null },
  isActivePage: false,
  isLoaderPage: false,
  joinTheGame: false,
  gameId: null,
  driving: { user_id: null, user_name: "" },
  stories: [],
  answers: {},
  nameGame: "",
  urlGame: "",
  game: {},
  historyNumber: 0,
  invitedUsers: [],
  onlineUsers: [],
  onlinePlayers: [],
  isActiveMenu: true,
};

export const gameReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_GAME:
      return { ...state, ...action.payload };

    case SET_JOIN_THE_GAME:
      console.log("gameReducers", action.payload);
      return { ...state, ...action.payload };

    case SET_IS_ACTIVE_MENU:
      return { ...state, isActiveMenu: action.payload };

    case SET_IS_ACTIVE_PAGE:
      return { ...state, isActivePage: action.payload };

    case CLEARE_DATA_GAME:
      return {
        ...state,
        joinTheGame: false,
        gameId: null,
      };

    default:
      return state;
  }
};
