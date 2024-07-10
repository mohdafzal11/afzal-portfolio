import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Ace.ai",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MOYE-Meme Coin",
    des: "Moye is an Indian frog who first gained fame through viral memes",
    img: "/moyo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://moyerevamped-sooty.vercel.app/",
    appType: "web",
  },
  {
    id: 2,
    title: "Dongo.ai-Web3 Research Assistant",
    des: "Tailored to deliver in-depth analysis, real-time market forecasts, and seamless data integration, Dongo AI elevates your strategic decision-making, placing institutional-grade insights within reach.",
    img: "/dongo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://dongo-ai.vercel.app/",
    appType: "web",
  },
  {
    id: 3,
    title: "Student Headquarter",
    des: "Discover a seamless way to navigate the college admissions process and achieve your dreams.",
    img: "/p6.png",
    iconLists: ["/re.svg", "/tail.svg", "./ts.svg"],
    link: "https://65a4b46de5e58ff798b8f93b--comforting-tulumba-d0a237.netlify.app/",
    appType: "web",
  },
  {
    id: 4,
    title: "Claimfinal-Finding UnClaimed Airdrops",
    des: "Bankless finds $802 on average in airdrops & more.Search your wallets. Set up alerts. ",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "./ts.svg"],
    link: "https://claimfinal.vercel.app/",
    appType: "web",
  },
  {
    id: 5,
    title: "ACE.ai",
    des: "Practice job scholarship and more interviews with our advanced AI",
    img: "/p5.png",
    iconLists: ["/re.svg", "/tail.svg", "./ts.svg"],
    link: "https://frontend-ace-ai.vercel.app/",
    appType: "web",
  },
];

export const skills = [
  {
    name: "Reactjs",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Nextjs",
  },
  {
    name: "Nodejs",
  },
  {
    name: "Java",
  },
  {
    name: "Kotlin",
  },
  {
    name: "Xml",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Firebase",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Abhay was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abhay's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abhay is the ideal partner.",
//     name: "Amit Sharma",
//     title: "Tech Solutions India",
//   },
//   {
//     quote:
//       "Working with Abhay was a transformative experience. His keen eye for design and commitment to quality ensured that our project was a resounding success. Abhay's proactive approach and excellent communication made the process seamless and enjoyable. I highly recommend him for any development needs.",
//     name: "Rahul Verma",
//     title: "Bright Ideas Co.",
//   },
//   {
//     quote:
//       "Abhay's expertise and passion for development were evident from the start. His ability to understand our vision and bring it to life surpassed our expectations. Abhay's attention to detail and dedication to perfection make him a valuable asset to any project. We look forward to collaborating with him again.",
//     name: "Anjali Mehta",
//     title: "Creative Minds Studio",
//   },
//   {
//     quote:
//       "Abhay's technical skills and creative problem-solving made a significant impact on our project. His ability to deliver high-quality results under tight deadlines was impressive. Abhay's collaborative spirit and innovative mindset make him an exceptional partner in any development endeavor.",
//     name: "Vikram Rao",
//     title: "NextGen Solutions",
//   },
//   {
//     quote:
//       "Collaborating with Abhay was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abhay's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abhay is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

export const testimonials=[]

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const companies=[]

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, Next.js  enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance App Dev Project",
    desc: "Led the development of a mobile app for a client, managing the entire process from initial concept to deployment on app stores. Additionally, built a web apps for another client, overseeing all stages from initial concept to launch ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Backend Developer",
    desc: "Developed and maintained user-facing features using modern backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mohdafzal11",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "",
  // },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mohd-afzal-6baa86205/",
  },
];
