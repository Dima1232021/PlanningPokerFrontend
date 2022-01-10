import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

export function useAddErrors(value) {
  const { addErrorAction, deleteErrorAction } = useActions();
  const { error, timer } = useSelector((state) => state.error);

  const addError = (message) => {
    const createId = Date.now() + Math.random();
    const arr = error.find((value) => value.message === message);

    if (!arr) {
      addErrorAction({ message, id: createId });
      setTimeout(() => deleteErrorAction(createId), timer);
    }
  };

  return { addError };
}
