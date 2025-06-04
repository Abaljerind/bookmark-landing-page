const TabContent = ({ content }) => {
  return (
    <>
      {/* Content image */}
      <div className="relative mb-[74px] md:mb-0 md:w-1/2">
        <div className="bg-newBlue absolute -bottom-8 -left-2 -z-[1] h-5/6 w-10/12 rounded-r-full md:-bottom-12 md:-left-4 lg:-left-14 lg:h-60 lg:w-11/12"></div>
        <img
          src={content.image}
          alt={content.alt}
          className="mx-auto mr-12 h-48 w-64 md:mr-0 md:h-52 md:w-72 lg:mr-8 lg:h-64 lg:w-96 lg:nth-[2]:h-72 lg:nth-[3]:h-72"
        />
      </div>
      {/* ./ Content image */}

      {/* Content text */}
      <div className="px-6 text-center md:w-1/2 md:text-start lg:w-2/5 lg:pr-16">
        <h3 className="text-newDarkBlue mb-4 text-2xl font-semibold">
          {content.title}
        </h3>
        <p className="text-newDarkBlue/50 mb-4 md:text-sm lg:text-base">
          {content.text}
        </p>
        <button
          type="button"
          className="bg-newBlue text-newGrey cursor-pointer rounded-md px-6 py-3 font-medium shadow-lg md:text-sm lg:text-base"
        >
          More Info
        </button>
      </div>
      {/* ./ Content text */}
    </>
  );
};

export default TabContent;
