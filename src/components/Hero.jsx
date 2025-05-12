const Hero = () => {
  return (
    <section className="flex flex-col-reverse gap-15 py-7">
      {/* hero text */}
      <div className="px-6">
        <div className="mb-6 text-center">
          <h1 className="text-newDarkBlue mb-4 text-3xl font-semibold tracking-wide">
            A Simple Bookmark Manager
          </h1>
          <p className="text-newDarkBlue/50">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>

        <div className="flex justify-evenly gap-2">
          <button
            type="button"
            className="bg-newBlue text-newGrey cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg"
          >
            Get it on Chrome
          </button>
          <button
            type="button"
            className="bg-newGrey text-newDarkBlue cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg"
          >
            Get it on Firefox
          </button>
        </div>
      </div>
      {/* ./ hero text */}

      {/* hero image */}
      <div className="relative -z-[1]">
        <div className="bg-newBlue absolute -right-0 -bottom-0 -z-[1] h-3/4 w-10/12 rounded-l-full"></div>
        <img
          src="./images/illustration-hero.svg"
          alt="Illustration for Hero section"
        />
      </div>
      {/* ./hero image */}
    </section>
  );
};

export default Hero;
