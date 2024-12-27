import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With almost 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July, 2023 - October, 2024",
    role: "Associate Engineer",
    company: "Hughes Systique Corporation",
    description: `
• Built version 4 of the application, transitioning from legacy technologies to a modern React-based architecture, enhancing performance and user experience (UX).<br>
• Architected the project’s folder structure and implemented Redux, improving maintainability and scalability by 50%.<br>
• Developed a comprehensive design system with reusable components, ensuring consistent UI/UX and reducing development time by 50%.<br>
• Implemented cross-browser and cross-device testing, ensuring consistent user experiences across 15+ devices and browsers, boosting user satisfaction by 35%.<br>
`,
    technologies: ["Javascript", "React.js", "Redux Toolkit", "HTML", "CSS","Git","Github"],
  },
  {
    year: "Jan, 2023 - June, 2023",
    role: "Trainee",
    company: "Hughes Systique Corporation",
    description: `• Received comprehensive training in Java FullStack development, acquiring proficiency in Java, Spring Boot, React, Angular, SQL, and Docker.
<br>
• Explored the MERN stack independently, undertaking projects and developing an original product using React and Node.js.
<br>
• Also explored AWS S3, Lambda (serverless functions), and YouTube APIs while building my 1st product.

`,
    technologies: ["Javascript", "React.js", "Redux Toolkit", "HTML", "CSS","SQL","Angular","Java","Springboot"],
  },
  {
    year: "Jan, 2022 - Apr, 2022",
    role: "Full Stack Developer Intern",
    company: "HighRadius",
    description: `• Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["React", "Nodejs", "Express", "Mongodb"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Dwarikapuri Colony, Faizullaganj, Lucknow, Uttar Pradesh - 226020 ",
  phoneNo: "+91 8303081204 ",
  email: "satyampandey1708@gmail.com",
};
