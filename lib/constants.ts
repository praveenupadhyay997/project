// Basic Info
export const NAME = "Praveen Kumar Upadhyay";
export const ROLE = "Senior Software Engineer";
export const CONTACT = {
  email: "praveenupadhyay997work@gmail.com",
  phone: "+91 9729127804",
  location: "Gorakhpur, India",
  linkedin: "https://www.linkedin.com/in/praveen-upadhyay-010117152/",
  github: "https://github.com/praveenupadhyay997",
};

// Experience data
export const EXPERIENCES = [
  {
    title: "Senior Software Engineer (I2)",
    company: "Talentica Software (I) Pvt. Ltd.",
    location: "Pune, Maharashtra",
    period: "09/2022 - Present",
    description: [
      "Worked on 4 different user facing platforms and inventory module with features like quick search, multi-sort, multiple filters, map integration, analytics gathering by custom-hooks, document upload features.",
      "Created analytics gathering custom hook along with Cloudwatch persistence for recording user activity capturing as a real time user monitoring (RUM) tools and won Ace Achiever Award for it.",
      "Designed and implemented minimalist UI to automate property appraisal process which decreased property-buyer sign up time by 40%.",
      "Created a Solr-query providing service which reduced index query creation time by 75% using NodeJs by using Solr Node Client npm library and published at npmjs.",
      "Followed best coding setup of implementing ESLint and unit tested all apps with more than 80% coverage using react testing library.",
      "Contributed to server side by integrating Cloudwatch logger service and solr-indexing to improve image availability on UI to 97% from 40% for which received Pat on back award.",
      "Implemented Redis and Memcached with LRU eviction policy for caching critical API responses, reducing average response time from 4s to 0.9s and enhancing page load time and user experience.",
      "Developed an off-market loader for single/bulk inventory uploads with Excel-to-model conversion and automated latitude/longitude suggestions using Google API, eliminating manual data searches by stakeholders.",
      "Developed an engagement platform for a Telco client featuring quick games, generative AI products, promotions, and widget-based admin management, boosting user retention from 3s to 25s.",
      "Developed user-facing engagement products using ChatGPT wrappers and implemented content automation with GPT tools, reducing content update and moderation time from 3-4 hours daily to near-zero.",
    ],
    technologies: "React JS, BackboneJS (legacy application), Spring boot, Gradle, tailwind-css, Bootstrap, Typescript, react-query, solr-client, loadash, UnderscoreJs, mongoDB, NodeJs, GraphQL, AWS, MySQL, Golang, Material UI",
  },
  {
    title: "Decision Analytics Associate",
    company: "ZS Associate",
    location: "Gurugram, Haryana",
    period: "02/2022 - 09/2022",
    description: [
      "Worked for a pharma client with heavy focus on real time data driven user interface in ReactJS.",
      "Developed real-time supply chain dashboard for generic and IG drugs, including features for tracking, medical representative incentives, and competitor analysis.",
      "Created responsive dash board with analytics features like AnyChart integration to track important metrics of various drugs to cover all sales personnel screen sizes which varied heavily with 73% adoption rate.",
      "Implemented a dynamic calculator view using React with react-hook-form, seamlessly syncing with the Backend to optimize database and view layer performance thereby reducing manual calculation to be done by users.",
    ],
    technologies: "MERN, React JS, Redux, Typescript, React-hook-form, React Testing library, ChartJS, Anychart, loadash, google map utils.",
  },
  {
    title: "Senior Software Engineer (B1)",
    company: "Capgemini Technologies Services Pvt. Ltd.",
    location: "Airoli, Maharashtra",
    period: "09/2020 - 02/2022",
    description: [
      "Worked as part of a restaurant delivery team for a user-facing platform catering to a fast-food chain's customer self-ordering and point-of-sale applications, serving approximately 2 million daily users across various roles and stakeholders.",
      "Successfully reduced clicks for coffee orders by 45% through the implementation of an optimized algorithm and the streamlining of business logic.",
      "Contributed to the server-side by implementing an entire workflow for the payment screen across two markets, including the migration of screen versions.",
      "Implemented localization features using i18n and asset configuration, utilizing TeamCity build and JFrog while ensuring Sonar quality checks.",
      "Developed a spatial-navigation feature for enhanced user navigation on product ordering screens using an npm library.",
      "Maintained a rigorous unit testing approach, achieving over 90% test coverage for all modules.",
    ],
    technologies: "ReactJS, custom css, react-hook-form, formik, custom-hooks, data layer tools like redux, keycloak and sso integration for admin user role, teamcity, bitbucket, Jfrog.",
  },
];

// Education data
export const EDUCATION = {
  degree: "Bachelor of Technology",
  institution: "National Institute of technology, Kurukshetra",
  period: "2016-2020",
  details: [
    "Graduated in Production and Industrial Engineering with 9.42/10 CGPA with department rank 3.",
    "Held various position of responsibilities on campus like Vice-President Mechsoc, Student Internship Coordinator.",
    "Automatic G-Code Generator in MERN Stack, Research Project on Biomedical Science Materials at IIT Kanpur.",
  ],
};

// Skills/Technologies
export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "Java", "C#", "C++", "Python"],
  frameworks: ["ReactJS", "Redux", "Angular", "Vue.js", "NodeJS", "NestJS", "Material UI", "Spring Boot", "Hibernate"],
  databases: ["MS SQL", "MongoDB", "MySQL", "Cassandra using Astra"],
  tools: ["AWS", "React Testing Library", "Tailwind CSS", "Prime React", "PrimeNg", "GraphQL", "Docker", "MERN", "MEAN"],
  keySkills: [
    "ReactJS, Redux toolkit, State management, Tailwind CSS, Advanced CSS and SASS.",
    "Responsive and performant application with proficiency in advanced Javascript.",
    "High level design with hands on experience on Redis implementation, kafka implementation using AWS and Azure.",
    "Low level design with development experience on SOLID and design patterns.",
    "Development experience in backend frameworks like NodeJS, MERN stack, Spring Boot in multiple projects.",
    "Dockerization of frontend for more consistent deployment process and enhanced asset management in a microservices architecture.",
  ],
};

// Projects
export const PROJECTS = [
  {
    title: "Streamify VibeX Project",
    description: "A React-based application that streams trending videos and other content from YouTube using the YouTube API. The project involved creating a clone of existing video streaming platforms while incorporating unique features, such as a multi-level commenting system inspired by Reddit.",
    image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://streamify-vibex.vercel.app/",
    technologies: ["React", "YouTube API", "CSS", "JavaScript"],
  },
  {
    title: "Natour Project",
    description: "A web application built as a fictional platform for interested natural excursionist. It was built using modern layout and advance CSS features and javascript. It was visioned with focus entirely upon user behavior and layout focused on aligning with conversion on website.",
    image: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://praveenupadhyay997.github.io/Natours_Project/",
    technologies: ["HTML", "SCSS", "JavaScript", "Node.js"],
  },
  {
    title: "Aayam Website",
    description: "A web application built keeping in mind the modern UI flow along with a student-lifecycle in a coaching center program. It was built using MERN stack. The requirement of this application focus on eventual consistency hence a no-sql DB makes a more sense.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://praveenupadhyay997.github.io/admin_dashboard_standalone_ui/",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
];