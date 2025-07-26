// Skills Section Logo's

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import cloudinaryLogo from './assets/tech_logo/cloudinary1.png';
import shadcnUiLogo from './assets/tech_logo/shadcnUi1.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
// import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
// import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
// import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
// import mcLogo from './assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import rungtaLogo from './assets/education_logo/runtaLog.jpeg';
import mlsmLogo from './assets/education_logo/mlsmLogo.png';
import bsebLogo from './assets/education_logo/bsebLogo.jpg';
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
// import githubdetLogo from './assets/work_logo/github_det.png';
import drAppointmentLogo from './assets/work_logo/drAppointment.png';
import ImagifyLogo from './assets/work_logo/imagify1.png';
import blogWebsiteLogo from './assets/work_logo/blog_webiste.png';
import chatAppLogo from './assets/work_logo/chatApp.png';
import authenticationLogo from './assets/work_logo/authentication.png';
import lovePercentageLogo from './assets/work_logo/lovePecentage.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Shadcn UI', logo: shadcnUiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Cloudinary', logo: cloudinaryLogo }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: rungtaLogo,
    school: "Rungta College of engineering and Technology, Bhilai",
    date: "July 2021 - July 2025",
    grade: "7.63 CGPA",
    desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science Engineering from, Rungta College of engineering and Technology, Bhilai. During my time at RCET, I gained a strong foundation in my core subjects. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
    degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
  },
  {
    id: 1,
    img: mlsmLogo,
    school: "M.L.S.M College Darbhanga, Bhiar",
    date: "Apr 2018 - May 2019",
    grade: "72.3%",
    desc: "I have completed my Intermediate of Science (ISC) degree from M.L.S.M College, Darbhanga. During my time at M.L.S.M College, I gained a strong foundation in my core subjects like Physics, Chemistry, and Mathematics. I actively participated in various workshops and college events, which enhanced my skills and knowledge",
    degree: "Intermediate of Science - ISC (XII)",
  },
  {
    id: 2,
    img: bsebLogo,
    school: "Utkramit M S Kamrauli Bahadurpur, Bihar",
    date: "Apr 2016 - Apr 2017",
    grade: "60%",
    desc: "I completed my class 10th education from Utkramit M S Kamrauli Bahadurpur, Bihar under the BSEB board. Where I studied Hindi, English, Maths, Science, Social science and Sanskrit.",
    degree: "BSEB (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Doctor Appointment Booking",
    description:
      "Create login and sign up page, use node Js for backend and react Js for frontend and use mongoose DB for database. In User Panel, User book appointment and cancel appointment, after booking appointment user also pay appointment fee to use razorpay. In Doctor Panel, doctor approve the appointment and cancel the appointment, doctor edit own profile, doctor view all appointment and also doctor show total earning. In Admin Panel, Admin add and manage doctors, View a list of all doctors, appointments, and total number of patients, and also cancel patient appointments.",
    image: drAppointmentLogo,
    tags: ["React Js", "Node Js", "Tailwind CSS", "Express", "MonogoDB", "VS Code"],
    github: "https://github.com/mahi720/drAppointment_full_code",
    webapp: "https://dr-appointment-page.vercel.app/",
  },
  {
    id: 1,
    title: "AI Image Generation",
    description:
      "User registration and secure login system, Each user is provided with 5 free credits for image generation upon signup. Integrated the ClipDrop API to generate high - quality images based on user inputs. Built a credit - based system where users can generate images based on available credits. Implemented Razorpay payment gateway for purchasing additional credits securely.",
    image: ImagifyLogo,
    tags: ["React Js", "Node Js", "Tailwind CSS", "Express", "MonogoDB", "VS Code", "Clipdrop API", "Razorpay"],
    github: "https://github.com/mahi720/Imagify_full_code",
    webapp: "https://imagify-imageai.vercel.app/",
  },
  {
    id: 2,
    title: "Blog Website",
    description:
      "User Panel, User registration and login functionality, Features for reading blogs, liking, commenting, and sharing blogs. User profile management, including editing profile details. Admin Panel, Blog management system for creating, editing, and deleting blogs.Ability to view and manage likes and comments on blogs. Admin profile management for updating personal details.",
    image: blogWebsiteLogo,
    tags: ["React Js", "Node Js", "Tailwind CSS", "Express", "MonogoDB", "VS Code"],
    github: "https://github.com/mahi720/Blog_Website_Full_Code",
    webapp: "https://crowdlion.netlify.app/",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Implemented live chat using Socket.io for instant two-way communication between users. Secured login/signup system using JWT (JSON Web Tokens) or sessions. Built backend APIs using Node.js + Express for managing users, messages, and chat rooms. Used MongoDB as the database to store user profiles, chat history, and real-time messages. Designed a clean, mobile-friendly UI with Tailwind CSS, supporting dark mode and modern chat layout.",
    image: chatAppLogo,
    tags: ["React JS", "Node.js", "Socket.io", "Zustand", "Tailwind CSS", "Express", "MonogoDB", "VS Code"],
    github: "https://github.com/mahi720/chat-app-deploy",
    webapp: "https://chat-app-deploy-jot9.onrender.com/login",
  },
  {
    id: 4,
    title: "Authentication",
    description:
      "In this project, I learned how to implement Mailtrap for user login and password reset functionality. User sign-up and login system using JWT tokens. On login, a 6-digit OTP is sent to the user’s email using Mailtrap SMTP service. Users can request a password reset by entering their email. A reset OTP is sent via Mailtrap. Auth state (user info, JWT token, loading state, errors) is managed using Zustand.",
    image: authenticationLogo,
    tags: ["Mailtrap", "React JS", "Node.js", "Zustand", "Tailwind CSS", "Express", "MonogoDB", "VS Code"],
    github: "https://github.com/mahi720/authentication_fullCode",
    webapp: "https://authentication-frontend-nine.vercel.app/signup",
  },
    {
      id: 5,
      title: "Calculate Love Percentage",
      description:
        "A fun and interactive web application built using HTML, CSS, and JavaScript to calculate the 'love compatibility' between two names. Users enter two names to get a playful 'love percentage' result. Randomized logic with engaging UI animations for a fun user experience. Responsive design that works well on both desktop and mobile devices.",
      image: lovePercentageLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mahi720/love-percentage",
      webapp: "https://checklovepercentage.netlify.app/",
    },
  //   {
  //     id: 6,
  //     title: "Coding Master",
  //     description:
  //       "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //     image: cmLogo,
  //     tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //     github: "https://codingmasterweb.in/",
  //     webapp: "https://codingmasterweb.in/",
  //   },
  //   {
  //     id: 7,
  //     title: "Image Search App",
  //     description:
  //       "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //     image: imagesearchLogo,
  //     tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //     github: "https://github.com/codingmastr/Image-Search-App",
  //     webapp: "https://imagsearch.netlify.app/",
  //   },
  //   {
  //     id: 8,
  //     title: "Image Background Remover",
  //     description:
  //       "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //     image: removebgLogo,
  //     tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //     github: "https://github.com/codingmastr/Image-Background-Remover",
  //     webapp: "https://removeyourbg.netlify.app/",
  //   },
];  