import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[16px] font-[600] rounded-full flex items-center justify-center">
              KR
            </span>
            {/* <div className='leading-[20px]'>
                        <h2 className='text-xl text-smallTextColor font-[700]'>Khalif</h2>
                        <p className='text-smallTextColor text-[14px] font-[500]'>personal</p>
                    </div> */}
          </div>

          {/* Menu Start */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* menu right */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]">
              <a
                href="https://t.me/Krizaldiw?text=Halo%20Khalif%20Rizaldi%2C%20Bagaimana%20Kabar%20mu%20%3F%20aku%20butuh%20bantuan%20nih"
                target="_blank"
                rel="noreferrer"
              >
                <i class="ri-send-plane-line"></i> Let's Talk
              </a>
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
