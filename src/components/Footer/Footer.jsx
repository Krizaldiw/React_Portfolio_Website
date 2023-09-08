import React from "react";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="text-center py-6 mt-20">
        <div>
          <h2 className="text-[24px] leading-10 mb-5 md:text-[2rem]">
            <span
              className="text-primaryColor font-[700]"
              style={{
                backgroundImage: "linear-gradient(45deg, #ea580c, #10b981, #0284c7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Do you want to collaborate with me?{" "}
              <i className="ri-chat-smile-line"></i>
            </span>
          </h2>
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-xs font-semibold">
              Follow Me :
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Krizaldiw"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 text-xl hover:text-primaryColor"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/khalif-rizaldi-981005205/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 text-xl hover:text-primaryColor"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="mailto:muhkhalifrizaldiw@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 text-xl hover:text-primaryColor"
              >
                <i className="ri-mail-fill"></i>
              </a>
              <a
                href="https://t.me/Krizaldiw?text=Halo%20Khalif%20Rizaldi%2C%20Bagaimana%20Kabar%20mu%20%3F%20aku%20butuh%20bantuan%20nih"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 text-xl hover:text-primaryColor"
              >
                <i className="ri-send-plane-fill"></i>
              </a>
            </div>
          </div>
          <div className="mt-4 text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Khalif Rizaldi. All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
