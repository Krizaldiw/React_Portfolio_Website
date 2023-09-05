import React from 'react'
import heroImg from '../../assets/images/hero.svg'
// import CountUp from 'react-countup/build/CountUp'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* Hero Left Content */}
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px] '>
                        Hi there,
                    </h5>
                    <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[35px]'>
                        Iam <span style={{ color: '#14b8a6' }}>Khalif Rizaldi</span><br/> 
                        Software Development Engineer in Test (QA) ex <a href='https://privy.id/id' style={{ color: '#dc2626', cursor: 'pointer' }}>PrivyID</a>
                    </h1>
                    <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='200' className='flex items-center gap-6 mt-6'>
                        <p>
                        My name is Muhammad Khalif Rizaldi Wibowo, people usually call me Khalif. Proficient in manual or automated testing and software development with 1 - 2 years experiences. Skilled in test case creation, management, execution, and reporting for Mobile and Web Applications my skill include but are not limited to Web Development and Data Analysis with ongoing commitment to professional growth.
                        </p>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='200' className='flex items-center gap-6 mt-7'>
                        <a href='#contact'>
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class='ri-mail-line'></i> Hire Me 
                            </button>
                        </a>
                        <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                            See Portfolio
                        </a>< br/>
                    </div>
                    <div className='flex items-center gap-9 mt-14'>
                        <span className='text-smallTextColor text-[15px] font-[600px]'>
                            Follow Me :
                        </span>
                        <span>
                            <a href='#github' className='text-smallTextColor text-[18px] font-[600]'>
                                 <i class="ri-github-fill"></i>
                            </a>
                        </span>
                        <span>
                            <a href='#linkedin' className='text-smallTextColor text-[18px] font-[600]'>
                                 <i class="ri-linkedin-fill"></i>
                            </a>
                        </span>
                        <span>
                            <a href='#mail' className='text-smallTextColor text-[18px] font-[600]'>
                                 <i class="ri-mail-fill"></i>
                            </a>
                        </span>
                        <span>
                            <a href='#phone' className='text-smallTextColor text-[18px] font-[600]'>
                                 <i class="ri-phone-fill"></i>
                            </a>
                        </span>
                    </div>
                </div>
                {/* hero left end */}
                {/* hero img */}
                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
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
  )
}

export default Hero