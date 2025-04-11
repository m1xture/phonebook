import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    !token && navigate("/signin");
  }, []);
  return token && children;
};

export default ProtectedRoute;
