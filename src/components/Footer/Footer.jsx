import React from "react";

const Footer = () => {
  // const [showNotification, setShowNotification] = useState(false);

  // // Fungsi untuk menampilkan notifikasi
  // const showPortfolioNotification = () => {
  //   setShowNotification(true);

  //   // Set timeout untuk menyembunyikan notifikasi setelah beberapa detik
  //   setTimeout(() => {
  //     setShowNotification(false);
  //   }, 5000); // Misalnya, notifikasi akan disembunyikan setelah 5 detik
  // };

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* footer top */}
      <div id = "contact" className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
          <h2 className="text-[26px] leading-10 mb-5 md:text-[2rem]">
              <span
                className="text-primaryColor font-[600]"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #10b981, #0284c7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Do you want to collaborate with me? <i class="ri-chat-smile-line"></i>
              </span>
            </h2>
          </div>
          <div className="w-full sm:w-1/2 flex items-center justify-end mb-20">
            <div className="flex items-center gap-9 mt-14">
              <span className="text-white text-[15px] font-[600px]">
                Follow Me :
              </span>
              <span>
                <a
                  href="https://github.com/Krizaldiw"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-[18px] font-[400]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/khalif-rizaldi-981005205/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-[18px] font-[400]"
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="mailto:muhkhalifrizaldiw@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-[18px] font-[400]"
                >
                  <i class="ri-mail-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://t.me/Krizaldiw?text=Halo%20Khalif%20Rizaldi%2C%20Bagaimana%20Kabar%20mu%20%3F%20aku%20butuh%20bantuan%20nih"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-[18px] font-[400]"
                >
                  <i class="ri-send-plane-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
