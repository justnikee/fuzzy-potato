import Header from "./Header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <>
    <Header />
    <div className="max-w-[1440px] px-8 m-auto">
      <main>{children}</main>
    </div>
    <Footer />
    </>
  );
};

export default Layout;
