const initialState = {
  isLoader: false,
  inTheGame: false,
  gameId: null,
  driving: {id: null, name: ''},
  historyNumber: 0,
  invitedUsers: [],
  onlineUsers: [],
  onlinePlayers: [],
  stories: [],
  answers: {},
};

export const gameReducers = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
