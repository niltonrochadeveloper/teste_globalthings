import { useDispatch, useSelector } from "react-redux";

const useStore = () => {
  return {
    useDispatch,
    useSelector,
  };
};

export default useStore;
