import Header from "./Header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <div className="max-w-[1440px] px-8 m-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
