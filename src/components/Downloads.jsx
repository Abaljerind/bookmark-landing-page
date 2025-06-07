const Downloads = () => {
  const browsers = [
    {
      image: "./images/logo-chrome.svg",
      alt: "logo chrome",
      title: "Add to Chrome",
      version: "Minimum version 62",
    },
    {
      image: "./images/logo-firefox.svg",
      alt: "logo firefox",
      title: "Add to Firefox",
      version: "Minimum version 55",
    },
    {
      image: "./images/logo-opera.svg",
      alt: "logo opera",
      title: "Add to Opera",
      version: "Minimum version 46",
    },
  ];

  return (
    <section className="flex flex-col py-14 xl:py-20">
      {/* header */}
      <header className="px-6 text-center xl:mb-6">
        <h2 className="text-newDarkBlue mb-3 text-2xl font-semibold xl:mb-5">
          Download the extension
        </h2>
        <p className="text-newDarkBlue/50 lg:text-lg">
          We’ve got more browsers in the pipeline. Please do let us know if{" "}
          <br className="hidden md:block" />
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </header>
      {/* ./ header */}

      {/* Download extension */}
      <ul className="flex flex-col items-center px-6 lg:flex-row lg:justify-center lg:gap-8">
        {browsers.map((browser, index) => {
          return (
            <li
              key={index}
              role="list"
              aria-label={`Extension card for ${browser.title}`}
              className="drop-shadow-newBlue/20 mt-10 flex w-72 flex-col items-center justify-center gap-6 rounded-2xl bg-white pt-10 pb-6 drop-shadow-xl lg:nth-[1]:mb-24 lg:nth-[3]:mt-32"
            >
              <img src={browser.image} alt={browser.alt} />
              <div className="mb-2 text-center">
                <h3 className="text-newDarkBlue mb-2 text-xl font-medium lg:text-2xl">
                  {browser.title}
                </h3>
                <p className="text-newDarkBlue/50 text-sm lg:text-base">
                  {browser.version}
                </p>
              </div>
              <img src="./images/bg-dots.svg" alt="background dots" />
              <button
                type="button"
                className="bg-newBlue text-newGrey hover:text-newBlue hover:ring-newBlue w-4/5 cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg transition-all duration-300 hover:bg-white hover:ring lg:text-base"
              >
                Add & Install Extension
              </button>
            </li>
          );
        })}
      </ul>
      {/* ./ Download extension */}
    </section>
  );
};

export default Downloads;
