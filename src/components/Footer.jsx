const Footer = () => {
  const navItems = ["features", "pricing", "contact"];

  return (
    <footer className="bg-newDarkBlue flex flex-col items-center py-10 md:flex-row md:justify-between md:px-6 lg:px-16 xl:px-28">
      {/* logo + nav */}
      <div className="mb-12 flex flex-col items-center gap-8 md:mb-0 md:flex-row xl:gap-12">
        {/* logo */}
        <img
          src="./images/logo-bookmark-footer.svg"
          alt="logo bookmark"
          className="lg:w-44"
        />
        {/* ./ logo */}

        {/* nav item */}
        <div className="md:flex md:items-center md:gap-8 xl:gap-12">
          {navItems.map((nav, index) => {
            return (
              <p
                key={index + 1}
                className="text-newGrey hover:text-newRed mb-5 cursor-pointer text-center tracking-widest uppercase transition-colors duration-300 last:mb-0 md:mb-0 lg:text-lg"
              >
                <a href="#">{nav}</a>
              </p>
            );
          })}
        </div>
        {/* ./ nav item */}
      </div>
      {/* logo + nav */}

      {/* media social */}
      <div className="flex items-center">
        <a href="https://www.facebook.com" className="mr-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="hover:text-newRed size-6 cursor-pointer text-white transition-colors duration-300 lg:size-7"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
            />
          </svg>
        </a>
        <a href="https://www.twitter.com" className="mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="hover:text-newRed size-6 cursor-pointer text-white transition-colors duration-300 lg:size-7"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
            />
          </svg>
        </a>
      </div>
      {/* ./ media social */}
    </footer>
  );
};

export default Footer;
