import { useState } from "react";
import TabContent from "./TabContent";

const Features = () => {
  const [activeTab, setActiveTab] = useState("simpleTab");

  const tabs = [
    { id: "simpleTab", label: "Simple Bookmarking" },
    { id: "speedyTab", label: "Speedy Searching" },
    { id: "easyTab", label: "Easy Sharing" },
  ];

  const tabContents = {
    simpleTab: {
      image: "./images/illustration-features-tab-1.svg",
      alt: "Illustration features Tab 1",
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    speedyTab: {
      image: "./images/illustration-features-tab-2.svg",
      alt: "Illustration features Tab 2",
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    easyTab: {
      image: "./images/illustration-features-tab-3.svg",
      alt: "Illustration features Tab 3",
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  };

  return (
    <section className="flex flex-col py-20">
      {/* header */}
      <header className="px-6 text-center md:flex md:flex-col md:items-center">
        <h2 className="text-newDarkBlue mb-3 text-2xl font-semibold">
          Features
        </h2>
        <p className="text-newDarkBlue/50 md:w-2/3">
          Our aim is to make it quick and easy for you to access your{" "}
          <br className="hidden lg:block" /> favourite websites. Your bookmarks
          sync between your devices <br className="hidden lg:block" /> so you
          can access them on the go.
        </p>
      </header>
      {/* ./ header */}

      {/* features list */}
      <div className="mx-auto mt-10 w-full">
        {/* tab header */}
        <div
          className="md:border-newDarkBlue/20 flex max-w-[500px] flex-col px-6 md:mx-auto md:w-fit md:max-w-[732px] md:flex-row md:justify-evenly md:gap-20 md:border-b"
          aria-label="Feature Tabs"
        >
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`border-newDarkBlue/20 relative cursor-pointer border-t border-t-gray-300 py-4 transition-all duration-700 ease-in-out last:border-b last:border-b-gray-300 ${activeTab === tab.id ? "active-tab text-newDarkBlue" : "text-newDarkBlue/50"} md:border-0 md:last:border-0`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* ./ tab header */}

        {/* tab content */}
        <article
          className="mt-20 md:flex md:items-center md:justify-between md:gap-2 lg:justify-center"
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          {tabContents[activeTab] && (
            <TabContent content={tabContents[activeTab]} />
          )}
        </article>
        {/* ./ tab content */}
      </div>
      {/* ./ features list */}
    </section>
  );
};

export default Features;
