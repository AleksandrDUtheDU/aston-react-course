import { useLocation } from "react-router-dom";

export const useCurrentPath = () => {
  const { pathname } = useLocation();
  return pathname.substr(1).split("/");
};

export default useCurrentPath;
