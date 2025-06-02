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
    <section className="flex flex-col py-14">
      {/* header */}
      <header className="px-6 text-center">
        <h2 className="text-newDarkBlue mb-3 text-2xl font-semibold">
          Download the extension
        </h2>
        <p className="text-newDarkBlue/50">
          We’ve got more browsers in the pipeline. Please do let us know if{" "}
          <br className="hidden md:block" />
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </header>
      {/* ./ header */}

      {/* Download extension */}
      <ul className="flex flex-col items-center px-6">
        {browsers.map((browser, index) => {
          return (
            <li
              key={index}
              role="list"
              aria-label={`Extension card for ${browser.title}`}
              className="drop-shadow-newBlue/20 mt-10 flex w-72 flex-col items-center justify-center gap-6 rounded-2xl bg-white pt-10 pb-6 drop-shadow-xl"
            >
              <img src={browser.image} alt={browser.alt} />
              <div className="mb-2 text-center">
                <h3 className="text-newDarkBlue mb-2 text-xl font-medium">
                  {browser.title}
                </h3>
                <p className="text-newDarkBlue/50 text-sm">{browser.version}</p>
              </div>
              <img src="./images/bg-dots.svg" alt="background dots" />
              <button
                type="button"
                className="bg-newBlue text-newGrey w-4/5 cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg"
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
