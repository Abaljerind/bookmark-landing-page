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
      <header className="px-6 text-center">
        <h2 className="text-newDarkBlue mb-3 text-2xl font-semibold">
          Features
        </h2>
        <p className="text-newDarkBlue/50">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </header>
      {/* ./ header */}

      {/* features list */}
      <div className="mx-auto mt-10 w-full">
        {/* tab header */}
        <div className="flex flex-col px-6" aria-label="Feature Tabs">
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`border-newDarkBlue/20 border-t border-b py-4 nth-[2]:border-t-0 nth-[2]:border-b-0 ${activeTab === tab.id ? "text-newDarkBlue decoration-newRed underline decoration-4 underline-offset-[18px]" : "text-newDarkBlue/45"} cursor-pointer font-medium transition-all duration-300`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* ./ tab header */}

        {/* tab content */}
        <article
          className="mt-20"
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
