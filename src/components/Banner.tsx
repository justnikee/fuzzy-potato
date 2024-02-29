import { Link } from "react-router-dom";

const Banner = ({ bannerImage }: any) => {
  return (
    <>
      <section>
        <Link to="/products">
          <img src={bannerImage} alt="" />
        </Link>

        <div className="flex flex-col justify-center items-center min-h-[400px] gap-4 w-[75%] m-auto text-center">
          <p>Air Max 90 LV8</p>
          <h3 className="text-center text-7xl uppercase bold">
          LEVEL UP YOUR LOOK
          </h3>
          <p className="text-xl">Push your game to new heights in bold fashion. Styled by NewJeans, the Air Max 90 LV8 makes a serious statement about maximum style.</p>
          <div className="mt-4">
            <Link
              className="bg-black text-white uppercase rounded-[50px] px-5 py-2 mt-4 text-[16px] mr-4"
              to="/"
            >
              Shop NewJeans’ Picks
            </Link>
            <Link
              className="bg-black text-white uppercase rounded-[50px] px-5 py-2 mt-4 text-[16px]"
              to="/"
            >
              Shop Air Max 90 LV8
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
