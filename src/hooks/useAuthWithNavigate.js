import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthWithNavigate = () => {
  const navigate = useNavigate();
  //   useEffect(() => {
  const token = Cookies.get("token");
  if (token) {
    if (token.length > 5) return token;
    navigate("/signin");
    // throw new Error("Invalid auth token");
  } else {
    navigate("/signin");
    // throw new Error("Invalid auth token");
  }
  //   }, [navigate]);
};
export default useAuthWithNavigate;
