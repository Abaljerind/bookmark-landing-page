import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  function handleOpen(index) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  const faqs = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed   sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-20">
      {/* header */}
      <header className="mb-15 px-6 text-center">
        <h2 className="text-newDarkBlue mb-3 text-2xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-newDarkBlue/50">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </header>
      {/* ./ header */}

      {/* FAQ */}
      <div className="w-full px-6">
        {faqs.map((faq, index) => {
          return (
            <div
              className="border-newDarkBlue/10 mb-6 flex flex-col justify-between border-b-2"
              key={index + 1}
            >
              <div className="flex items-center justify-between pb-6">
                <p className="text-newDarkBlue">{faq.question}</p>
                <button
                  onClick={() => handleOpen(index)}
                  className="cursor-pointer"
                >
                  <img
                    src={
                      openIndex === index
                        ? "./images/icon-arrow-close.svg"
                        : "./images/icon-arrow.svg"
                    }
                    alt={openIndex ? "close answer" : "open answer"}
                  />
                </button>
              </div>
              {openIndex === index && (
                <p className="text-newDarkBlue/80 pb-6 leading-7">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
      {/* ./ FAQ */}

      <button
        type="button"
        className="bg-newBlue text-newGrey cursor-pointer rounded-md px-7 py-3.5 text-sm font-medium shadow-lg"
      >
        More Info
      </button>
    </section>
  );
};

export default FAQ;
