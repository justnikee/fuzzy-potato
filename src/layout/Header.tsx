import { Link } from "react-router-dom";
import { css } from "@emotion/css";

type Props = {};

function Header({}: Props) {
  return (
    <>
      <nav
        className={css`
          background: #ccc;
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
          <div>
            <Link to="/">Home</Link>
            <Link to="/addproduct">Add Products</Link>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/">
              <span className="text-3xl">TMITRooM</span>
            </Link>
          </div>
          <div>
            <div>
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
