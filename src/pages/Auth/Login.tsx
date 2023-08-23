import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Layout>
        Login
        <p>Don't have account?</p>
        <Link to={"/signup"}>Create account now!</Link>
      </Layout>
    </>
  );
};

export default Login;
