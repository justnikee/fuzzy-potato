import { Link } from "react-router-dom";
import { css } from "@emotion/css";

type Props = {};

function Header({}: Props) {
  return (
    <>
      <nav
        className={css`
          background: #fff;
          color: #000;
          display: flex;
          justify-content: center;
        `}
      >
        <div
          className={css`
            padding: 10px;
            max-width: 1240px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div
            className={css`
              display: flex;
              gap: 10px;
              font-family: "Poppins", cursive;
              width: 33%;
            `}
          >
            <Link to="/">Home</Link>
            <Link to="/addproduct">Add Products</Link>
            <Link to="/products">Products</Link>
          </div>
          <div
            className={css`
              width: 33%;
            `}
          >
            <Link to="/">
              <span
                className={css`
                  font-family: "ADLaM Display", cursive;
                  font-size: 30px;
                `}
              >
                Store
              </span>
            </Link>
          </div>
          <div>
            <div
              className={css`
                display: flex;
                gap: 10px;
                font-family: "Poppins", cursive;
                width: 33%;
              `}
            >
              <Link to="/products">Cart</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
