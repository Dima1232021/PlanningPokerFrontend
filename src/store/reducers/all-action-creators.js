import { errorActionCreators } from "./error/action-creators";
import { authActionCreators } from "./auth/action-creators";
import { gamesActionCreators } from "./games/action-creators";

export const allActionCreators = {
  ...errorActionCreators,
  ...authActionCreators,
  ...gamesActionCreators,
};
