export const HERO_CONTENT = `Founding Full Stack Engineer & AI Developer with expertise in building scalable, real-time web applications and AI voice agents. I specialize in Next.js, Node.js, and Generative AI, architecting systems that drive user engagement and business growth. With a deep focus on performance and innovation, I transform complex ideas into seamless, high-impact digital solutions.`;

export const ABOUT_TEXT = `I am a Founding Full Stack Engineer with over 2 years of experience delivering robust and scalable web applications. Currently leading development at Cognitiev AI, I build real-time AI voice agents and scalable SaaS platforms using Next.js, Node.js, PostgreSQL, and OpenAI. I have a proven track record of scaling applications from 0 to 1, having built enterprise systems and secure APIs at companies like Hughes Systique and HighRadius. Passionate about AI-driven innovation, I continuously explore new technologies like Webhooks and Real-time Voice AI to create intuitive, user-centric solutions.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "SDE2 - Cognitiev AI",
    company: "Cognitiev AI",
    description: `
      <ul style="list-style-type: disc;TDPd-left: 20px;">
        <li>Leading development of AI-driven products with Next.js, Node.js, PostgreSQL, and Prisma.</li>
        <li>Enhanced real-time AI Voice Agent integrating OpenAI, WhatsApp API, and Webhooks for seamless communication.</li>
        <li>Architected scalable backend systems and optimized cloud deployment pipelines for high availability.</li>
        <li>Mentoring junior developers and actively contributing to system design and product strategy.</li>
      </ul>
    `,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "OpenAI", "WhatsApp API"],
  },
  {
    year: "Nov 2024 - May 2025",
    role: "SDE (Founding Engineer)",
    company: "Cognitiev AI",
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Founding Full Stack Engineer building AI-driven apps using Next.js, Node.js, PostgreSQL, and Prisma.</li>
        <li>Developed real-time AI Voice Agent from scratch with OpenAI, WhatsApp API, and Webhooks.</li>
        <li>Authored conversational AI scripts and automated complex workflows via n8n and Make.com.</li>
      </ul>
    `,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "n8n", "Make.com"],
  },
  {
    year: "July 2023 - Oct 2024",
    role: "Associate Software Engineer",
    company: "Hughes Systique Corporation",
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li><strong>EvueMe (AI Recruitment SaaS):</strong> Led frontend development with React.js and Redux Toolkit, implementing modern UI libraries.</li>
        <li>Built a reusable component library, cutting development effort by 50% and ensuring design consistency.</li>
        <li>Optimized state management with Redux Toolkit, successfully reducing API response times by 30%.</li>
        <li><strong>Performance Management System (PMS):</strong> Developed a fully responsive UI with seamless RESTful API integration.</li>
      </ul>
    `,
    technologies: ["React.js", "Redux Toolkit", "JavaScript", "REST APIs", "HTML/CSS"],
  },
  {
    year: "Jan 2023 - June 2023",
    role: "Trainee",
    company: "Hughes Systique Corporation",
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Completed comprehensive 6-month training in Java FullStack development (Java, Spring Boot, React.js, Angular, SQL, Docker).</li>
        <li>Built a MERN stack project incorporating AWS S3, Lambda, and YouTube API.</li>
      </ul>
    `,
    technologies: ["Java", "Spring Boot", "React.js", "Angular", "SQL", "Docker", "AWS"],
  },
  {
    year: "Jan 2022 - Apr 2022",
    role: "Software Developer Intern",
    company: "HighRadius",
    description: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Developed an invoice management system using React.js, Redux, and Flask.</li>
        <li>Implemented real-time data visualization with Chart.js to enhance analytics insights.</li>
        <li>Optimized API calls, reducing data-fetching time by 30%.</li>
      </ul>
    `,
    technologies: ["React.js", "Redux", "Flask", "Chart.js"],
  },
];

export const PROJECTS = [
  {
    title: "TheSarvaNews",
    description:
      "A consolidated news aggregator fetching real-time headlines from multiple sources. Features category filters and a responsive React frontend, delivering fast access to curated content.",
    image: "/images/sarvanews.png",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "News API",
      "Node.js",
    ],
    demo: "https://thesarvanews.vercel.app/",
    // github: "https://github.com/satyam1708/sarvanews",
  },
  {
    title: "MitrLok",
    description:
      "A full-stack social networking app designed to connect users based on interests and location. Solved the lack of local social platforms by building a real-time chat system via Socket.IO and filtered connections.",
    image: "/images/mitrlok.png", // Ensure you have this image in public/images folder
    technologies: [
      "Next.js",
      "React.js",
      "Redux",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Tailwind CSS",
    ],
    demo: "https://mitrlok-frontend.vercel.app/",
    github: "", // Add link if available
  },
  {
    title: "PropBots (Real Estate AI)",
    description:
      "A generative AI-powered chatbot for real estate. Solved inefficient inquiry handling by integrating OpenAI API with function calling to provide instant, conversational property recommendations.",
    image: "/images/propbot.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "Tailwind CSS",
    ],
    demo: "https://propbotsp.vercel.app/",
    github: "", 
  },
  {
    title: "MovieManch",
    description:
      "A movie discovery platform using the TMDB API. Users can browse trending, upcoming, and top-rated movies with detailed information and a clean, responsive UI.",
    image: "/images/moviemanch.png",
    technologies: ["React.js", "TMDB API", "Tailwind CSS", "Vercel"],
    demo: "https://moviemanch.vercel.app/",
    github: "https://github.com/satyam1708/moviemanch",
  },
  {
    title: "TextNova",
    description:
      "A fast and efficient text utility tool for converting cases, counting characters, and formatting text. Built with performance and a clean user interface in mind.",
    image: "/images/textnova.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
    demo: "https://textnova.vercel.app/",
    github: "https://github.com/satyam1708/textnova",
  },
  {
    title: "MyPortfolio",
    description:
      "Personal portfolio website showcasing my journey as a Full Stack Engineer. Features a responsive design, interactive UI, and detailed project showcases.",
    image: "/images/portfolio.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://satyam-pandey.vercel.app/",
    github: "",
  },
];

export const CONTACT = {
  address: "Lucknow, Uttar Pradesh, India",
  phoneNo: "+91-8303081204",
  email: "pandeysatyam1708@gmail.com",
};