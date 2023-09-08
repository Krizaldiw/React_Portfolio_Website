import React, { useEffect, useState } from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal, showModalHandler }) => {
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
      <div className="max-w-[360px] max-h-[50%]w-full mx-4 bg-white rounded-lg p-5 relative">
        <span
          className="absolute top-1 right-1 cursor-pointer"
          onClick={closeAndUnlockScroll}
        >
          <div
            className="w-[35px] h-[35px] bg-alertColor text-white text-[16px] font-[600] rounded-full flex items-center justify-center"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 2,
            }}
          >
            <i className="ri-close-fill"></i>
          </div>
        </span>
        <div>
          <figure style={{ position: "relative" }}>
            <a target="_blank" rel="noreferrer" href={portfolio.siteUrl}>
              <img
                src={portfolio?.imgUrl}
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "80%",
                  width: "auto",
                  height: "auto",
                  cursor: "pointer",
                  borderRadius: "10px", // Tambahkan properti borderRadius untuk membuat sudut gambar menjadi bulat
                }}
              />
              <div
                className="button-container"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              >
                <a target="_blank" rel="noreferrer" href={portfolio.siteUrl}>
                  <button className="bg-primaryColor text-white py-2 px-4 rounded-[8px] font-[400] hover:bg-headingColor ease-in duration-300">
                    Live Site
                  </button>
                </a>
              </div>
            </a>
          </figure>
        </div>

        <div>
          <h2 className="text-xl text-headingColor font-[700] my-5">
            {portfolio.title}
          </h2>
          <p className="text-[13px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4>Tools</h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[12px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Button Live Site */}
          {/* <a target="_blank" rel="noreferrer" href={portfolio.siteUrl}>
            <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[400] hover:bg-headingColor ease-in duration-300">
              Live Site
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
