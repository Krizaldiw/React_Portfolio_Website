import React from "react";
import heroImg from "../../assets/images/hero.svg";
// import CountUp from 'react-countup/build/CountUp'

const Hero = () => {
//   const [showNotification, setShowNotification] = useState(false);

//   // Fungsi untuk menampilkan notifikasi
//   const showPortfolioNotification = () => {
//     setShowNotification(true);

//     // Set timeout untuk menyembunyikan notifikasi setelah beberapa detik
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 5000); // Misalnya, notifikasi akan disembunyikan setelah 5 detik
//   };
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Hero Left Content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px] "
            >
              Hi there,
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[35px]"
            >
              Iam <span style={{ color: "#14b8a6" }}>Khalif Rizaldi</span>
              <br />
              Software Development Engineer in Test
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-6"
            >
              <p>
                My name is Muhammad Khalif Rizaldi Wibowo, people usually call
                me Khalif. Proficient in manual or automated testing and
                software development with 1 - 2 years experiences. Skilled in
                test case creation, management, execution, and reporting for
                Mobile and Web Applications my skill include but are not limited
                to Web Development and Software Engineering with ongoing commitment to
                professional growth.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="mailto:muhkhalifrizaldiw@gmail.com?subject=Hi%20Khalif%20Rizaldi&body=Hi%20Khalif%20Rizaldi%2C%20nice%20to%20meet%20you%2C%20may%20I%20know%20more%20about%20you%3F">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i className="ri-mail-line"></i> Hire Me
                </button>
              </a>

              {/* Notifikasi */}
              {/* {showNotification && (
                <div className="fixed top-4 right-4 bg-notifColor shadow-lg p-4 rounded-lg flex items-center">
                  <i className="ri-user-smile-line text-white text-xl mr-2"></i>
                  <p className="text-white">Thank you for contacting me</p>
                </div>
              )} */}

              <a
                href="https://drive.google.com/file/d/1O6zfpcbBwCTgEUgIvLxFjOHQqwrvUPao/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                View My Portfolio
              </a>
              <br />
            </div>
          </div>
          {/* hero left end */}
          {/* hero img */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* hero img end */}
          {/* hero content right */}
          {/* <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={6} duration={2} suffix='+'/>
                        </h2>
                    </div>
                </div> */}
          {/* hero content right end */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
