export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "CS graduate from Western University",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-4 lg:min-h-[45vh] ",
    imgClassName: "w-full h-full lg:absolute md:absolute",
    titleClassName: "justify-end",
    img: "/me.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 bg-white",
    // flex h-full w-full item-center justify-center 
    imgClassName:"flex items-center justify-center absolute w-full h-full",
    titleClassName: "justify-start min-h-40",
    img: "/western.png",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 4,
  //   title: "",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "",
  // },

  // {
  //   id: 5,
  //   title: "Currently working on projects!",
  //   description: "",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Work Inquiries?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const skills = ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/python.svg","/dock.svg", "/ruby.svg", "/rails.svg", "/javascript.svg"]

export const projects = [
  {
    id: 1,
    title: "Captcha",
    des: "Built a training model using Deep Learning to solve captchas using Tensorflow and SSD Inception v2 (COCO).",
    img: "/p1.jpg",
    iconLists: ["/python.svg"],
    link: "",
  },
  {
    id: 2,
    title: "Chess ",
    des: "Created a Chess game using object oriented programming.",
    img: "/p2.jpg",
    iconLists: ["/python.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Snake",
    des: "Created a Snake game using object oriented programming.",
    img: "/p3.jpg",
    iconLists: ["/python.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Coming Soon!",
    des: "",
    img: "",
    iconLists: [],
    link: "",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/stanley021",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/stanley-chen-240b1b172/",
  },
];
