const Footer = () => {
  const navItems = ["features", "pricing", "contact"];

  return (
    <footer className="bg-newDarkBlue flex flex-col items-center py-10">
      {/* logo + nav */}
      <div className="mb-12 flex flex-col items-center gap-8">
        {/* logo */}
        <img src="./images/logo-bookmark-footer.svg" alt="logo bookmark" />
        {/* ./ logo */}

        {/* nav item */}
        <div>
          {navItems.map((nav, index) => {
            return (
              <p
                key={index + 1}
                className="text-newGrey mb-5 cursor-pointer text-center tracking-widest uppercase last:mb-0"
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
      <div className="flex">
        <a href="https://www.facebook.com" className="mr-10">
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
      {/* ./ media social */}
    </footer>
  );
};

export default Footer;
