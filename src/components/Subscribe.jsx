const Subscribe = () => {
  return (
    <section className="bg-newBlue py-16">
      {/* header */}
      <header className="px-6 text-center">
        <p className="text-newGrey mb-4 text-sm font-medium tracking-[0.25em] uppercase md:mb-6 lg:text-base">
          35,000+ already joined
        </p>
        <h2 className="text-newGrey text-2xl font-medium lg:text-3xl">
          Stay up-to-date with what <br className="hidden md:block" /> we’re
          doing
        </h2>
      </header>
      {/* ./ header */}

      {/* input form */}
      <form className="mt-6 px-6 text-center md:flex md:items-center md:justify-center md:gap-3">
        <input
          type="email"
          id="email"
          className="bg-newGrey mb-4 w-full rounded-md p-3 text-sm placeholder:text-gray-400 focus:outline-0 md:mb-0 md:w-60 lg:w-72 lg:text-base"
          placeholder="Enter your email address"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-newRed text-newGrey hover:text-newRed hover:ring-newRed w-full cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg transition-all duration-300 hover:bg-white hover:ring md:w-28 lg:w-32 lg:text-base"
          onClick={(e) => e.preventDefault()}
        >
          Contact Us
        </button>
      </form>
      {/* ./ input form */}
    </section>
  );
};

export default Subscribe;
