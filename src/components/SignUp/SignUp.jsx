import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { signup } from "../../redux/user/operations";
import { selectUser } from "../../redux/user/userSlice";
import { useEffect } from "react";

const schema = z.object({
  name: z
    .string()
    .min(5, { message: "Too short username" })
    .max(29, { message: "Too long username" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Too short password" })
    .max(40, { message: "Too long password" }),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { token } = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);
  const onSubmit = handleSubmit((data) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      result?.error?.errors.forEach(({ message, path: [nameAttr] }) =>
        setError(nameAttr, { text: message, type: "manual" })
      );
      return;
    }
    dispatch(signup(data));
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center  pt-[20vh]"
    >
      <label className="text-slate-100 flex flex-col mb-5 relative text-md">
        Username
        <input
          className="bg-slate-700 rounded-sm mt-2 p-1 w-[20vw] focus:outline-none"
          type="text"
          autoComplete="off"
          autoFocus="on"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-800 absolute z-10 text-xs right-0 top-0">
            {errors.name.text}
          </p>
        )}
      </label>
      <label className="text-slate-100 flex flex-col mb-5 relative text-md">
        Email
        <input
          className="bg-slate-700 rounded-sm mt-2 p-1 w-[20vw] focus:outline-none"
          type="text"
          autoComplete="off"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-800 absolute z-10 text-xs right-0 top-0">
            {errors.email.text}
          </p>
        )}
      </label>
      <label className="text-slate-100 flex flex-col relative text-md">
        Password
        <input
          className="bg-slate-700 rounded-sm w-[20vw] p-1 focus:outline-none"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-800 absolute z-10 text-xs right-0 top-0">
            {errors.password.text}
          </p>
        )}
      </label>
      <Link
        to="/signin"
        className="text-slate-500 hover:underline text-sm mb-5 mt-1"
      >
        Already have an account?
      </Link>
      <button
        type="submit"
        className="pl-4 pr-4 pt-2 pb-2 bg-slate-700 text-slate-50 w-[7vw] rounded-md duration-300 delay-75 hover:bg-slate-500 "
      >
        Sign up
      </button>
    </form>
  );
};
export default SignUp;
