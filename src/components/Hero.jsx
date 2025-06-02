const Hero = () => {
  return (
    <section className="flex flex-col-reverse gap-15 py-7 md:flex-row md:gap-0 md:py-9 lg:py-15 lg:pl-16">
      {/* hero text */}
      <div className="px-6 md:w-3/4 lg:mt-8 lg:w-1/2 lg:px-0">
        <div className="mb-6 text-center md:text-start lg:w-4/5 lg:max-w-[500px]">
          <h1 className="text-newDarkBlue mb-4 text-3xl font-semibold tracking-wide lg:text-4xl">
            A Simple Bookmark Manager
          </h1>
          <p className="text-newDarkBlue/50 lg:text-lg">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>

        <div className="flex justify-evenly gap-2 md:justify-start lg:gap-4">
          <button
            type="button"
            className="bg-newBlue text-newGrey cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg lg:text-base"
          >
            Get it on Chrome
          </button>
          <button
            type="button"
            className="bg-newGrey text-newDarkBlue cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg lg:text-base"
          >
            Get it on Firefox
          </button>
        </div>
      </div>
      {/* ./ hero text */}

      {/* hero image */}
      <div className="relative -z-[1] lg:w-1/2">
        <div className="bg-newBlue absolute -right-0 -bottom-0 -z-[1] h-3/4 w-10/12 rounded-l-full lg:-bottom-10 lg:h-11/12"></div>
        <img
          src="./images/illustration-hero.svg"
          alt="Illustration for Hero section"
          className="lg:absolute lg:-top-8 lg:-left-14 lg:max-w-lg"
        />
      </div>
      {/* ./hero image */}
    </section>
  );
};

export default Hero;
