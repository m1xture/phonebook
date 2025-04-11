import Cookies from "js-cookie";
const useAuth = () => {
  const token = Cookies.get("token");
  if (token) {
    return token.length > 5 ? token : null;
  } else {
    return null;
  }
};
export default useAuth;
