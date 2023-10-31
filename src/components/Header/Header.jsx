import React, { useRef, useState } from "react";

const Header = ({ isModalOpen }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
  
    const targetAttr = e.target.getAttribute("href");
    
    // Tambahkan pernyataan ini untuk memeriksa nilai targetAttr
    console.log("targetAttr:", targetAttr);
  
    const targetElement = document.querySelector(targetAttr);
  
    // Tambahkan pernyataan ini untuk memeriksa hasil pencarian
    console.log("targetElement:", targetElement);
  
    if (targetElement) {
      const location = targetElement.offsetTop;
  
      window.scrollTo({
        top: location - 80,
        left: 0,
      });
    }
  };  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref = {headerRef} className ={`w-full h-[80px] leading-[80px] flex items-center sticky__header ${
        isModalOpen ? "hidden" : "" // Menyembunyikan header saat modal terbuka
      }`} style={{ zIndex: isModalOpen ? 5 : 10 }}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[16px] font-[600] rounded-full flex items-center justify-center">
              KR
            </span>
          </div>

          {/* Menu Start */}
          <div className={`menu ${isMenuOpen ? 'show__menu' : ''}`} ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a onClick ={handleClick} className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick ={handleClick} className="text-smallTextColor font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a onClick ={handleClick} className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a onClick ={handleClick} className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* menu right */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]">
              <a
                href="https://t.me/Krizaldiw?text=Halo%20Khalif"
                target="_blank"
                rel="noreferrer"
              >
                <i class="ri-send-plane-line"></i> Let's Talk
              </a>
            </button>
            <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              {isMenuOpen ? (
                <i class="ri-close-fill"></i> // Tampilkan ikon close jika menu terbuka
              ) : (
                <i class="ri-menu-line"></i> // Tampilkan ikon menu jika menu tertutup
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
