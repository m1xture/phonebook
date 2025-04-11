import { MdLogout } from "react-icons/md";
import Cookies from "js-cookie";
import { clearUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    Cookies.remove("token");
    dispatch(clearUser());
  };
  return (
    <button
      type="button"
      className="bg-slate-700 text-slate-50 absolute z-10 top-10 right-10 rounded-md p-2 flex items-center justify-center duration-300 delay-75 hover:bg-slate-500"
      onClick={logout}
    >
      <MdLogout color="" />
    </button>
  );
};
export default Logout;
