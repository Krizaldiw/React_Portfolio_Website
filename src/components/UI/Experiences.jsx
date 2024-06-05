import React from "react";
import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png'

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="container lg:pt-5">
          <div className="text-center">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
              Experiences
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p> */}
          </div>
          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-gray-700 antialised text-sm font font-semibold">
                {/* Vertical Line Running Through The Middle */}
                <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                {/* Right Card */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 mx-auto sm:mx-0" // Tambahkan kelas "mx-auto" di sini
                        >
                          <h5 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                            QA Engineer 
                          </h5>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            October 2023 - Present<br />
                            PT. Ionpay Network (NICEPAY)<br />
                            DKI Jakarta, Indonesia
                          </p><br />
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            Contributed and Performing Develop Automation Testing Code For Direct Debit, E-Wallet, Virtual Account and Enhancement Payment Gateway Project. 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                        <figure>
                            <img src={backendImg} alt="" />
                        </figure>
                    </div>
                  </div>
                </div>
                
                {/* Left Card */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 mx-auto sm:mx-0" // Tambahkan kelas "mx-auto" di sini
                        >
                          <h5 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                            QA Engineer
                          </h5>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            October 2022 - September 2023<br />
                            PT. Privy Identitas Digital (Privy)<br />
                            Yogyakarta, Indonesia
                          </p><br />
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            Contribute to PrivyPass Merchant Dashboard Team, Liveness, ADF, Employee Attendance Record
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                        <figure>
                            <img src={frontendImg} alt="" />
                        </figure>
                    </div>
                  </div>
                </div>

                {/* Right Card */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 mx-auto sm:mx-0" // Tambahkan kelas "mx-auto" di sini
                        >
                          <h5 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                            Research Assistant
                          </h5>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            September 2021 - July 2022<br />
                            Teknik Informatika (UMS)<br />
                            Surakarta, Indonesia
                          </p><br />
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            Investigated and Analysis the most frequently discussed keywords React JavaScript library. Collaborate with Ph.D Students from Nara Institute Of Science and Technology (Japan) 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                        <figure>
                            <img src={backendImg} alt="" />
                        </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Experiences;
