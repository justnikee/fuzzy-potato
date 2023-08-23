import { Link } from "react-router-dom";

const Banner = ({ bannerImage }: any) => {
  return (
    <>
      <section>
        <Link to="/products">
          <img src={bannerImage} alt="" />
        </Link>

        <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
          <p>Air Max 1</p>
          <h3 className="text-center text-6xl uppercase bold">
            No Genres.
            <br /> All Soul.
          </h3>
          <div className="mt-4">
            <Link
              className="bg-black text-white uppercase rounded-[50px] px-5 py-3 mt-4"
              to="/"
            >
              Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
