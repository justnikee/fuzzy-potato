import axios, { AxiosResponse } from "axios";

interface UserData {
  username: string;
  password: string;
}

interface User {
  id: number;
  username: string;
}

const register = async (userData: UserData): Promise<User | undefined> => {
  try {
    const res: AxiosResponse<User> = await axios.post(
      "http://localhost:5001/users/register",
      userData
    );

    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
  } catch (error) {
    throw error;
  }
};

const logout = async (): Promise<void> => {
  localStorage.removeItem("user");
};

const login = async (userData: UserData): Promise<User | undefined> => {
  try {
    const res: AxiosResponse<User> = await axios.post(
      "http://localhost:5001/users/login",
      userData
    );

    if (res.data) {
      localStorage.setItem("userId", JSON.stringify(res.data.user.userid));
      localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
  } catch (error) {
    throw error;
  }
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
