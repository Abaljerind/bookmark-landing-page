const Subscribe = () => {
  return (
    <section className="bg-newBlue py-16">
      {/* header */}
      <header className="px-6 text-center">
        <p className="text-newGrey mb-4 text-sm font-medium tracking-[0.25em] uppercase">
          35,000+ already joined
        </p>
        <h2 className="text-newGrey text-2xl font-medium">
          Stay up-to-date with what we’re doing
        </h2>
      </header>
      {/* ./ header */}

      {/* input form */}
      <form className="mt-6 px-6 text-center">
        <input
          type="email"
          id="email"
          className="bg-newGrey mb-4 w-full rounded-md p-3 text-sm placeholder:text-gray-400 focus:outline-0"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="bg-newRed text-newGrey w-full cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg"
        >
          Contact Us
        </button>
      </form>
      {/* ./ input form */}
    </section>
  );
};

export default Subscribe;
