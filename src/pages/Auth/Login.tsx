import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Input = styled.input`
  border: 1px solid #e5e5e5;
  color: #8d8d8d;
  border-radius: 3px;
  height: 40px;
  padding-left: 20px;
`;

const Login = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/users/login",
        {
          email: loginForm.email,
          password: loginForm.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.sucess) {
        toast.success(res.data.message);

        localStorage.setItem("user", JSON.stringify(res.data));

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(res.data.error);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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
