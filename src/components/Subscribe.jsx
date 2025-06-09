import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email.trim() === "") {
      setError(false);
      return;
    }

    setError(!isValid);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (error) return;

    setTimeout(() => {
      setEmail("");
    }, 350);
  }

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
        <div
          className={`relative rounded-md ${error && "bg-newRed top-8 -mt-4 mb-12 p-0.5 pb-4 md:-mt-8 md:mb-0 md:pb-8"}`}
        >
          <input
            type="email"
            id="email"
            className="bg-newGrey mb-4 w-full rounded-md p-3 text-sm placeholder:text-gray-400 focus:outline-0 md:mb-0 md:w-60 lg:w-72 lg:text-base"
            placeholder="Enter your email address"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validateEmail(email)}
          />
          {error && (
            <img
              src="/images/icon-error.svg"
              alt="icon error"
              className="absolute top-4 right-3"
            />
          )}
          {error && (
            <p
              className={`absolute top-12 mt-1 pl-3 text-start text-sm text-white italic lg:mt-2`}
            >
              Whoops, make sure it's an email
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-newRed text-newGrey hover:text-newRed hover:ring-newRed w-full cursor-pointer rounded-md px-4 py-3 text-sm font-medium shadow-lg transition-all duration-300 hover:bg-white hover:ring md:w-28 lg:w-32 lg:text-base"
          onClick={(e) => handleSubmit(e)}
        >
          Contact Us
        </button>
      </form>
      {/* ./ input form */}
    </section>
  );
};

export default Subscribe;
