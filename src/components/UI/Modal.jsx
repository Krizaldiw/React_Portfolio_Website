import React, { useEffect, useState } from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  // State untuk melacak apakah modal terbuka atau tidak
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Menutup modal ketika mengklik di luar modal
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeAndUnlockScroll();
    }
  };

  // Mengunci scrolling
  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  // Membuka scrolling
  const unlockScroll = () => {
    document.body.style.overflow = "visible";
  };

  // Fungsi untuk menampilkan modal
  const openModal = () => {
    setIsModalOpen(true);
    lockScroll(); // Mengunci scrolling saat modal terbuka
  };

  // Fungsi untuk menutup modal dan membuka scrolling
  const closeAndUnlockScroll = () => {
    setIsModalOpen(false);
    unlockScroll(); // Membuka scrolling saat modal tertutup
    setShowModal(false); // Menutup modal
  };

  useEffect(() => {
    if (isModalOpen) {
      openModal();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center modal-overlay ${
        isModalOpen ? "bg-opacity-80" : ""
      }`}
      onClick={handleCloseModal}
    >
      <div className="max-w-[450px] w-full mx-4 bg-white rounded-lg p-5 relative">
        <span
          className="absolute top-2 right-2 cursor-pointer"
          onClick={closeAndUnlockScroll}
        >
          <div className="w-[35px] h-[35px] bg-alertColor text-white text-[16px] font-[600] rounded-full flex items-center justify-center">
            <i className="ri-close-fill"></i>
          </div>
        </span>
        <div>
          <figure>
            <img src={portfolio?.imgUrl} alt="" />
          </figure>
        </div>
        <div>
            <h2 className="text-2xl text-headingColor font-[700] my-5">
                {portfolio.title}
            </h2>
            <p className="text-[15px] leading-7 text-smallTextColor">
                {portfolio.description}
            </p>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
                <h4>
                    Technologies
                </h4>
                {portfolio.technologies.map((item, index) => (
                    <span key={index} className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0">
                        {item}
                    </span>
                ))}
            </div>
            
            {/* Button Live Site */}
            <a target="_blank"
                rel="noreferrer" href={portfolio.siteUrl}>
                <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                    Live Site
                </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
