import { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import toast, { Toaster } from "react-hot-toast";
import styled from "@emotion/styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../store/slices/authSlice";

const Input = styled.input`
  border: 1px solid #e5e5e5;
  color: #8d8d8d;
  border-radius: 3px;
  height: 40px;
  padding-left: 20px;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, messgae } = useSelector(
    (state) => state.auth
  );

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error(messgae);
    }

    if (isSuccess || user) {
      navigate("/");
      console.log("loged in");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, messgae, navigate, dispatch]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const userData = {
      ...form,
    };

    dispatch(register(userData));

    // try {
    //   const res = await axios.post(
    //     "http://localhost:8080/users/register",
    //     {
    //       firstname: form.firstname,
    //       lastname: form.lastname,
    //       age: form.age,
    //       email: form.email,
    //       phone: form.phone,
    //       address: form.address,
    //       password: form.password,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   if (res.data.success) {
    //     toast.success(res.data.message);
    //     setTimeout(() => {
    //       navigate("/Login");
    //     }, 2000);
    //   } else {
    //     toast.error(res.data.message);
    //   }
    //   console.log(res.data);
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Something Went Wrong😢");
    // }
  };

  if (isLoading) {
    <div>Loading...</div>;
  }

  return (
    <>
      <Layout>
        <Toaster />
        <section className="flex justify-start items-center flex-col text-center h-screen">
          <h2 className="text-4xl">Become a member</h2>
          <div className="flex justify-center w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-1/3 gap-6 p-12  "
            >
              <Input
                type="text"
                onChange={handleChange}
                placeholder="First Name"
                name="firstname"
                value={form.firstname}
              />
              <Input
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={form.lastname}
                onChange={handleChange}
              />
              <Input
                name="email"
                type="text"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                name="phone"
                type="text"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <Input
                name="age"
                type="text"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
              />
              <Input
                name="address"
                type="text"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
              />
              <Input
                name="password"
                type="text"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <button className="bg-black text-white px-10 py-3 uppercase">
                Join us
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SignUp;
