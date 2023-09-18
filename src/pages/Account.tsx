import Layout from "../layout/layout";
import { useSelector } from "react-redux";

type Props = {};

const Account = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <Layout>
      <div className="flex flex-col items-center text-left">
        <h2>Account</h2>
        <h3>Name: {user.user.name}</h3>
        <h3>Email: {user.user.email}</h3>
        <h3>Phone: {user.user.phone}</h3>
        <h3>Address: {user.user.address}</h3>
      </div>
    </Layout>
  );
};

export default Account;
