import { useSelector } from "react-redux";
import { useActions } from ".";



let resolveCallback;
function useConfirm() {
  const { showConfirm, hideConfirm } = useActions();
  const confirmState = useSelector((state) => state.confirm);
  const onConfirm = () => {
    hideConfirm();
    resolveCallback(true);
  };

  const onCancel = () => {
    hideConfirm();
    resolveCallback(false);
  };

  const confirm = (text) => {
    showConfirm(text);
    return new Promise((res, rej) => {
      resolveCallback = res;
    });
  };

  return { confirm, onConfirm, onCancel, confirmState };
}

export default useConfirm;
