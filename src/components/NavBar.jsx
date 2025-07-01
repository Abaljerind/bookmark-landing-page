import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav((prevNav) => {
      const newNav = !prevNav;
      document.body.style.overflow = newNav ? "hidden" : "auto";
      return newNav;
    });
  }

  const navItems = ["Features", "Pricing", "Contact"];

  return (
    <nav className="sticky top-0 z-30 w-full bg-white px-6 py-9 md:relative md:z-0 lg:px-16 xl:px-28">
      <div className="flex items-center justify-between md:hidden">
        <img
          src="./images/logo-bookmark.svg"
          alt="Logo Bookmark"
          className="select-none"
        />

        <img
          src="./images/icon-hamburger.svg"
          alt="Icon Mobile Menu"
          className="cursor-pointer"
          onClick={handleNav}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "fixed -top-full left-0 h-full w-full px-6 py-9 duration-300 ease-in"
            : "fixed top-0 left-0 z-10 h-full w-full bg-[#252b46f2] px-6 py-9 duration-300 ease-in md:hidden"
        }
      >
        <div className="flex items-center justify-between">
          <img
            src="./images/logo-bookmark-light.svg"
            alt="Logo Bookmark"
            className="select-none"
          />

          <img
            src="./images/icon-close.svg"
            alt="Icon Mobile Menu"
            className="cursor-pointer"
            onClick={handleNav}
          />
        </div>

        <div className="relative mt-10">
          <ul className="grid items-center text-center">
            {navItems.map((nav, index) => {
              return (
                <li
                  key={index}
                  className="border-newGrey/30 cursor-pointer border-t border-b text-xl tracking-widest text-white uppercase first:border-b-0 first:py-4 nth-[2]:border-b-0 nth-[2]:py-4 nth-[3]:py-4"
                >
                  <a href="#">{nav}</a>
                </li>
              );
            })}
            <button
              type="button"
              className="text-newGrey mt-6 cursor-pointer rounded-md border-2 border-white py-2 text-xl tracking-widest uppercase"
            >
              Login
            </button>
          </ul>
        </div>

        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-10">
          <a href="https://www.facebook.com">
            <img
              src="./images/icon-facebook.svg"
              alt="Icon Facebook"
              className="size-6 cursor-pointer"
            />
          </a>
          <a href="https://www.twitter.com">
            <img
              src="./images/icon-twitter.svg"
              alt="Icon Twitter"
              className="size-6 cursor-pointer"
            />
          </a>
        </div>
      </div>
      {/* ./Mobile menu */}

      {/* Desktop menu */}
      <div className="hidden items-center justify-between md:flex">
        <img
          src="./images/logo-bookmark.svg"
          alt="Logo Bookmark"
          className="select-none lg:h-auto lg:w-44"
        />

        <ul className="flex items-center justify-evenly gap-5 xl:gap-12">
          {navItems.map((nav, index) => {
            return (
              <li
                key={index}
                className="text-newDarkBlue hover:text-newRed cursor-pointer text-base tracking-widest uppercase transition-colors duration-300 lg:text-base"
              >
                <a href="#">{nav}</a>
              </li>
            );
          })}
          <button
            type="button"
            className="bg-newRed text-newGrey hover:text-newRed hover:ring-newRed cursor-pointer rounded-md px-6 py-2 text-sm tracking-wider uppercase shadow-lg transition-all duration-300 hover:bg-white hover:ring lg:text-base"
          >
            Login
          </button>
        </ul>
      </div>
      {/* ./Desktop menu */}
      <div className="hidden"></div>
    </nav>
  );
};

export default NavBar;
