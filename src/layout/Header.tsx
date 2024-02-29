import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../store/slices/authSlice";
import { getCartCount } from "../store/slices/cartSlice";
import React, { useEffect } from "react";
import AnnouncementBarTop from "./components/announcement-bar-top";

type Props = {};

function Header({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state: any) => state.auth);
  const cartCount = useSelector((state: any) => state.cart.cartCount);
  console.log(user);
  console.log(cartCount);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getCartCount());
  }, [user]);
  return (
    <>
    <AnnouncementBarTop/>
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
              font-family: "Helvetica Text", cursive;
              width: 33%;
            `}
          >
            <Link className="hover:underline" to="/">
              Home
            </Link>
            <Link className="hover:underline" to="/products">
              All Products
            </Link>
            <Link to="/collections">
              Collections
            </Link>
          </div>
          <div
            className={css`
              width: 33%;
            `}
          >
            <Link className="" to="/">
              <span
                className={css`
                  font-family: "Nike", cursive;
                  font-size: 30px;
                  font-weight: 800;
                `}
              >
                Nxkeeyyy
              </span>
            </Link>
          </div>
          <div>
            <div
              className={css`
                display: flex;
                gap: 10px;
                font-family: "Helvetica Text", cursive;
                width: 33%;
              `}
            >
              <Link className="hover:underline flex gap-1" to="/cart">
                Cart <span>{cartCount}</span>
              </Link>
              {user ? (
                <>
                  <p
                    className="cursor-pointer transition-all hover:underline "
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                  <Link className="hover:underline" to="/account">
                    Account
                  </Link>
                </>
              ) : (
                <>
                  <Link className="hover:underline" to={"/signup"}>
                    Register
                  </Link>
                  <Link className="hover:underline" to="/login">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default React.memo(Header);
