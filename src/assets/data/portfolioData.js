// import portfolioImg01 from "../images/portfolio-01.jpg";
// import portfolioImg02 from "../images/portfolio-02.jpg";
// import portfolioImg03 from "../images/portfolio-03.jpg";
// import portfolioImg04 from "../images/portfolio-04.jpg";
// import portfolioImg05 from "../images/portfolio-05.jpg";
// import portfolioImg06 from "../images/portfolio-06.jpg";
// import portfolioImg07 from "../images/portfolio-07.jpg";
import portfolioImg08 from "../images/portfolio-08.jpg";
import portfolioImg09 from "../images/portfolio-09.jpg";
import portfolioImg10 from "../images/portfolio-10.jpg";
import portfolioImg11 from "../images/portfolio-11.jpg";
import portfolioImg12 from "../images/portfolio-12.jpg";
import portfolioImg13 from "../images/portfolio-13.jpg";
import portfolioImg14 from "../images/portfolio-14.jpg";
import portfolioImg15 from "../images/portfolio-15.jpg";
import portfolioImg16 from "../images/portfolio-16.jpg";
import portfolioImg17 from "../images/portfolio-17.jpg";
import portfolioImg18 from "../images/portfolio-18.jpg";
import portfolioImg19 from "../images/portfolio-19.jpg";
import portfolioImg20 from "../images/portfolio-20.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg08,
    category: "Development",
    title: "Dashboard Suite - Submitted Data",
    description:
      "Merchant Dashboard is a platform or interface specially designed for merchants or business owners working with a particular service or product.",
    technologies: ["Postman", "Jira", "K6", "GitHub"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg09,
    category: "Development",
    title: "Dashboard Suite - File Storage",
    description:
      "Merchant Dashboard is a pla orm or interface specially designed for merchants or business owners working with a par cular service or product.",
    technologies: ["Postman", "Jira", "K6", "GitHub"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg10,
    category: "Development",
    title: "ADF - PrivyGolf Event",
    description:
      "Privy ADF - PrivyGolf Event Sentul is a charity golf event held by Privy ADF, a financial services company in Indonesia. The event aims to raise funds to support children's education in Indonesia",
    technologies: ["Postman", "Jira", "K6", "GitHub"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg11,
    category: "Development",
    title: "ADF - Hukumonline Run 2023",
    description:
      "The proceeds from the run will be donated to the Hukumonline Legal Literacy Fund, which is used to support the development of legal literacy programs in Indonesia.",
    technologies: ["Postman", "Jira", "K6", "NodeJS", "Jest", "Reporter"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg12,
    category: "Development",
    title: "IT Del Registration",
    description:
      "Privy IT Del Registration - Presence is a program that allows IT Del Students to register for and attendance college studying",
    technologies: ["Postman", "K6", "Node.js", "Jira", "Jest", "Reporter"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: portfolioImg13,
    category: "Development",
    title: "Liveness OnBoarding - Bank Raya",
    description:
      "The PrivyPass Liveness Onboarding service is a secure and convenient way for Bank Raya to verify the identity of its customers. The service is also compliant with Indonesian regulations on electronic Know Your Customer (e-KYC).",
    technologies: ["Postman", "Sheet", "Manual Testing"],
    siteUrl: "https://privy.id/privypass",
  },
  {
    id: "07",
    imgUrl: portfolioImg14,
    category: "Development",
    title: "Employee Record Mobile",
    description:
      "A mobile-based employee attendance record is an electronic system that allows employees to clock in and out of work using their mobile phones. ",
    technologies: ["K6", "NodeJS", "Jest", "Postman", "GitLab"],
    siteUrl: "#",
  },
  {
    id: "08",
    imgUrl: portfolioImg15,
    category: "Development",
    title: "Employee Record Dashboard",
    description:
      "This system can be used to track employee attendance, hours worked, and breaks taken. It can also be used to generate reports on employee attendance and productivity.",
    technologies: ["K6", "NodeJS", "Jest", "Postman", "GitLab"],
    siteUrl: "#",
  },
  {
    id: "09",
    imgUrl: portfolioImg16,
    category: "Testing",
    title: "Automation Report - Privy Akselerasi",
    description:
      "Report Automation Test Result from Mobile and Web System",
    technologies: ["NodeJS", "K6", "Jest", "Postman", "GitLab", "Jira"],
    siteUrl: "https://drive.google.com/file/d/1y7rHlVHmA23-TnselDlbAFeiQX88pJN1/view?usp=sharing",
  },
  {
    id: "10",
    imgUrl: portfolioImg17,
    category: "Testing",
    title: "Testcase Report - PrivyPass",
    description:
      "Report Testcase, Test Scenario, and UAT from Merchant Dashboard Product",
    technologies: ["NodeJS", "K6", "Jest", "Postman", "GitLab", "Jira"],
    siteUrl: "https://drive.google.com/file/d/1lvfphULs-t376hYPeW_fIW3fwA7ylfkt/view?usp=sharing",
  },
  {
    id: "11",
    imgUrl: portfolioImg18,
    category: "Development",
    title: "Simple Rest API NodeJS - ExpressJS",
    description:
      "Simple Rest API using NodeJS-Express MongoDB and Testing Rest API using Postman-Newman",
    technologies: ["Node.js", "MongoDB","ExpressJS", "Newman", "Nodemon", "GitHub"],
    siteUrl: "https://github.com/Krizaldiw/NodeJS_MongoDB_Newman.git",
  },
  {
    id: "12",
    imgUrl: portfolioImg19,
    category: "Testing",
    title: "API Jest Automation",
    description:
      "Automation API Testing using Jest, Jest-html-reporters, Chai",
    technologies: ["Jest", "Node.js", "Chai", "Supertest", "Reporter", "CI/CD"],
    siteUrl: "https://github.com/Krizaldiw/Jest_API_Automation.git",
  },
  {
    id: "13",
    imgUrl: portfolioImg20,
    category: "Testing",
    title: "K6 Load Test - API NodeJS",
    description:
      "About Load Testing using k6 and Reporting using k6-html-reporters",
    technologies: ["K6", "JavaScript", "Node.js", "Reporter"],
    siteUrl: "https://github.com/Krizaldiw/K6_LoadTest.git",
  },
  // {
  //   id: "13",
  //   imgUrl: portfolioImg06,
  //   category: "Development",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "14",
  //   imgUrl: portfolioImg07,
  //   category: "Testing",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "15",
  //   imgUrl: portfolioImg05,
  //   category: "Testing",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "16",
  //   imgUrl: portfolioImg06,
  //   category: "Testing",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "17",
  //   imgUrl: portfolioImg07,
  //   category: "Testing",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "18",
  //   imgUrl: portfolioImg05,
  //   category: "Testing",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "19",
  //   imgUrl: portfolioImg06,
  //   category: "Testing",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "20",
  //   imgUrl: portfolioImg07,
  //   category: "Testing",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
];

export default portfolios;