import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(3);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [allPortfolios, setAllPortfolios] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3);
    // Cek jika nextItems akan mencapai atau melebihi panjang semua portofolio
    if (nextItems + 3 >= allPortfolios.length) {
      setAllPortfolios(data);
    }
  };

  const showModalHandler =  id => {
    setShowModal(true)
    setActiveID(id)
  }

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(allPortfolios.slice(0, nextItems));
    }
    if (selectTab === "app-development") {
      const filteredData = allPortfolios.filter(
        (item) => item.category === "Development"
      );
      setPortfolios(filteredData.slice(0, nextItems));
    }
    if (selectTab === "app-testing") {
      const filteredData = allPortfolios.filter(
        (item) => item.category === "Testing"
      );
      setPortfolios(filteredData.slice(0, nextItems));
    }
  }, [selectTab, allPortfolios, nextItems]);

  const handleTabChange = (tab) => {
    setSelectTab(tab);
    setNextItems(3); // Reset jumlah item yang ditampilkan ketika mengganti tab
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[800]">
              Portfolio
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleTabChange("all")}
              className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] ${
                selectTab === "all" ? "bg-smallTextColor text-white" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleTabChange("app-development")}
              className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] ${
                selectTab === "app-development" ? "bg-smallTextColor text-white" : ""
              }`}
            >
              Development
            </button>
            <button
              onClick={() => handleTabChange("app-testing")}
              className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] ${
                selectTab === "app-testing" ? "bg-smallTextColor text-white" : ""
              }`}
            >
              Testing
            </button>
          </div>
          <div className="flex items-center gap-4 flex-wrap mt-12">
            {portfolios?.map((portfolio, index) => (
              <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
              >
                <figure>
                  <img
                    className="rounded-[8px]"
                    src={portfolio.imgUrl}
                    alt=""
                  />
                </figure>
                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                  <div className="w-full h-full flex items-center justify-center">
                    <button onClick ={() => showModalHandler(portfolio.id)} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          {nextItems < allPortfolios.length && nextItems <= portfolios.length && (
              <button
                onClick={loadMoreHandler}
                className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 mx-auto"
              >
                Load More
              </button>
            )}
        </div>
      </div>
      {
        showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
      }
    </section>
  );
};

export default Portfolio;
