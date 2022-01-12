import { useSelector } from "react-redux";
import useActions from "../hooks/useActions";

function useAddErrors(value) {
  const { addErrorAction, deleteErrorAction } = useActions();
  const { error, timer, characters } = useSelector((state) => state.error);

  const addError = (message) => {
    let createId = "";

    for (let i = 0; i < 5; i++)
      createId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );

    if (!error.find((value) => value.message === message)) {
      addErrorAction({ message, id: createId });
      setTimeout(() => deleteErrorAction(createId), timer);
    }
  };

  return { addError };
}

export default useAddErrors;
