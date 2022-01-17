import { errorActionCreators } from "./error/action-creators";
import { authActionCreators } from "./auth/action-creators";
import { gamesActionCreators } from "./games/action-creators";
import { gameActionCreators } from "./game/action-creators";

export const allActionCreators = {
  ...errorActionCreators,
  ...authActionCreators,
  ...gamesActionCreators,
  ...gameActionCreators,
};
