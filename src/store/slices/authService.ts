import axios from "axios";

//register user
const register = async (userData: any) => {
  const res = await axios.post(
    "http://localhost:8080/users/register",
    userData
  );

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const authService = {
  register,
};

export default authService;
