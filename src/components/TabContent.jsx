const TabContent = ({ content }) => {
  return (
    <>
      {/* Content image */}
      <div className="relative mb-[74px]">
        <div className="bg-newBlue absolute -bottom-8 -left-2 -z-[1] h-5/6 w-10/12 rounded-r-full"></div>
        <img
          src={content.image}
          alt={content.alt}
          className="mx-auto size-72 h-auto"
        />
      </div>
      {/* ./ Content image */}

      {/* Content text */}
      <div className="px-6 text-center">
        <h3 className="text-newDarkBlue mb-4 text-2xl font-semibold">
          {content.title}
        </h3>
        <p className="text-newDarkBlue/50 mb-4">{content.text}</p>
        <button
          type="button"
          className="bg-newBlue text-newGrey cursor-pointer rounded-md px-6 py-3 font-medium shadow-lg"
        >
          More Info
        </button>
      </div>
      {/* ./ Content text */}
    </>
  );
};

export default TabContent;
