import { getUser } from "@/actions/getUser";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

const Header = async () => {
  const user = await getUser();
  console.log(user);

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link href="/" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use href="img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input type="text" placeholder="Search tours" className="nav__search-input" />
        </form>
      </nav>
      <Link href="/" className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </Link>
      <nav className="nav nav--user">
        <a href="#" className="nav__el">
          My bookings
        </a>
        {user && (
          <>
            <LogoutButton />
            <Link href="/me" className="nav__el">
              <img src={`/img/users/${user.photo}`} alt={`photo of user ${user.name}`} className="nav__user-img" />
              <span>{user.name}</span>
            </Link>
          </>
        )}

        {!user && (
          <>
            <Link href="/login" className="nav__el">
              Log in
            </Link>
            <Link href="/signup" className="nav__el nav__el--cta">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
