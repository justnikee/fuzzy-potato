import React, { useState } from "react";
import Layout from "../../layout/layout";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

const Input = styled.input`
  border: 1px solid #e5e5e5;
  color: #8d8d8d;
  border-radius: 3px;
  height: 40px;
  padding-left: 20px;
`;

const SignUp = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    password: "",
  });

  const handleChnage = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Layout>
        <section className="flex justify-start items-center flex-col text-center h-screen">
          <h2 className="text-4xl">Become a member</h2>
          <div className="flex justify-center w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-1/3 gap-6 p-12  "
            >
              <Input
                type="text"
                onChange={handleChnage}
                placeholder="First Name"
                name="firstname"
                value={form.firstname}
              />
              <Input
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={form.lastname}
                onChange={handleChnage}
              />
              <Input
                name="email"
                type="text"
                placeholder="Email"
                value={form.email}
                onChange={handleChnage}
              />
              <Input
                name="phone"
                type="text"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChnage}
              />
              <Input
                name="age"
                type="text"
                placeholder="Age"
                value={form.age}
                onChange={handleChnage}
              />
              <Input
                name="address"
                type="text"
                placeholder="Address"
                value={form.address}
                onChange={handleChnage}
              />
              <Input
                name="password"
                type="text"
                placeholder="Password"
                value={form.password}
                onChange={handleChnage}
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
