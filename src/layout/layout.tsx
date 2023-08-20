import Header from "./Header";
import Footer from "./footer";

type Props = {};

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
