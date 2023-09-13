import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../store/slices/authSlice";

const Input = styled.input`
  border: 1px solid #e5e5e5;
  color: #8d8d8d;
  border-radius: 3px;
  height: 40px;
  padding-left: 20px;
`;

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, messgae } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e: any) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error(messgae);
    }

    if (isSuccess || user) {
      toast.success("Wow You Logged In! 💖");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, messgae, navigate, dispatch]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const userData = {
      ...loginForm,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Layout>
        <Toaster />
        <div className="text-center flex justify-center flex-col items-center">
          <h2>YOUR ACCOUNT FOR EVERYTHING</h2>
          <form
            className="flex flex-col w-1/3 gap-6 p-12"
            onSubmit={handleSubmit}
          >
            <Input
              name="email"
              type="text"
              placeholder="Email"
              value={loginForm.email}
              onChange={handleChange}
            />
            <Input
              name="password"
              type="text"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleChange}
            />
            <button className="bg-black text-white px-10 py-3 uppercase">
              Sign In
            </button>
          </form>

          <div className="flex flex-col justify-center items-center gap-5">
            <p className="">Don't have account?</p>
            <Link to={"/signup"}>Create account now!</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
