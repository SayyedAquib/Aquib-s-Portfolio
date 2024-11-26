import MegaBlogsImage from "../assets/MegaBlogs.png";
import URLShortenerImage from "../assets/URLShortener.png";
import YouTubeImage from "../assets/YouTube.png";
import Climate from "../assets/Climate.png";
import FoodFinder from "../assets/FoodFinder.png";

export const SKILLS = [
  "React",
  "JavaScript",
  "Redux",
  "Tailwind CSS",
  "RESTful APIs",
  "Shadcn/UI",
  "HTML",
  "CSS",
  "Java",
  "Python",
  "Typescript",
  "Vite",
  "Webpack",
  "Babel",
  "Git/GitHub",
  "Firebase",
  "Appwrite",
  "Supabase",
  "Vercel",
  "Netlify",
  "Responsive Design",
  "Performance Optimization",
  "Problem Solving",
  "Attention to Detail",
  "Communication / Collaboration",
];

export const PROJECTS = [
  {
    title: "Mega Blogs",
    description:
      "Developed a full-stack web application using React and Appwrite, enabling users to create, edit, and manage blog posts with a rich text editor and image uploads.",
    image: MegaBlogsImage,
    bullets: [
      "Implemented user authentication and authorization features, allowing users to sign up, log in, and manage their sessions securely.",
      "Designed and integrated a responsive user interface with Tailwind CSS, enhancing user experience across various devices and screen sizes.",
      "Utilized Redux for state management, ensuring smooth data flow and efficient updates throughout the application.",
      "Enabled file storage and retrieval using Appwrite's Storage service, providing seamless upload and preview functionalities for featured images in blog posts.",
    ],
    liveLink: "https://aquibs-megablogs.vercel.app/",
    sourceCode: "https://github.com/SayyedAquib/MegaBlogs",
  },
  {
    title: "URL Shortener",
    description:
      "Developed a full-stack application that allows users to create, manage, and analyze shortened URLs, complete with QR code generation for easy sharing.",
    image: URLShortenerImage,
    bullets: [
      "Implemented secure user sign-up and login functionality using Supabase, ensuring data protection and user management.",
      "Utilized Tailwind CSS to create a visually appealing and responsive user interface, enhancing the user experience across multiple devices.",
      "Built a dashboard that provides users with insights into their URLs, including click statistics, geographic data, and device usage.",
      "Integrated Recharts to display URL performance metrics visually, allowing users to easily interpret their analytics data.",
    ],
    liveLink: "https://aquibs-url-shortener.vercel.app/",
    sourceCode: "https://github.com/SayyedAquib/url-shortener",
  },
  {
    title: "Video Streaming Platform",
    description:
      "Developing a dynamic video streaming application using React, Redux, and Tailwind CSS, mimicking features of popular platforms like YouTube, including video search, playback, and live chat functionalities.",
    image: YouTubeImage,
    bullets: [
      "Integrated YouTube Data API for fetching video details and search results, enhancing the application's content delivery and user engagement.",
      "Building a live chat feature using Redux for state management, enabling real-time communication among users during video playback.",
      "Implemented debounced search functionality with caching, reducing API calls by 40% and enhancing performance.",
      "Styled with Tailwind CSS for a streamlined and consistent UI development process.",
    ],
    liveLink: "https://aquibs-video-streaming-platform.netlify.app/",
    sourceCode: "https://github.com/SayyedAquib/video-streaming-platform",
  },
  {
    title: "Climate",
    description:
      "Developed a climate web app featuring current weather and forecasts, a 24-hour temperature graph, and a global city search. Utilized Tanstack Query for search history and favorites. The app supports light and dark modes and has a fully responsive UI built with React and Shadcn/ui.",
    image: Climate,
    bullets: [
      "Implemented geolocation functionality to automatically retrieve and display local weather data, allowing users to quickly access relevant information based on their current location.",
      "Integrated a city search feature that enables users to find weather information for specific cities, leveraging a user-friendly command interface for quick access to search history and favorite cities.",
      "I used TanStack Query to implement features like search history and adding cities to favorites through mutations.",
      "Utilized React, TypeScript, Shadcn/UI, and Tailwind CSS to create a modern, visually appealing user interface, ensuring a seamless experience across desktop and mobile devices.",
    ],
    liveLink: "https://aquib-s-climate.vercel.app/",
    sourceCode: "https://github.com/SayyedAquib/Climate",
  },
  {
    title: "Food Finder",
    description:
      "Developed a food delivery web application that allows users to browse a variety of restaurants, view detailed menus, and place orders online. The app features user authentication via Google Sign-In using Firebase and is built with React, Redux, and Tailwind CSS for a responsive design.",
    image: FoodFinder,
    bullets: [
      "Implemented a search functionality that enables users to quickly find restaurants and dishes, providing suggestions as they type for an enhanced user experience.",
      "Integrated cart management features, allowing users to add, remove, and manage items in their cart, with real-time updates reflecting changes in the total price.",
      "Utilized Redux for state management to efficiently handle user authentication, cart data, and UI toggles, ensuring smooth interactions and data flow throughout the application.",
      "Leveraged Swiggy live APIs to fetch dynamic restaurant and menu data, ensuring users have access to the latest offerings and promotions while handling errors gracefully.",
    ],
    liveLink: "https://aquibs-food-finder.vercel.app/",
    sourceCode: "https://github.com/SayyedAquib/Food-Finder",
  },
];

export const EXPERIENCE = [
  {
    title: "Software Engineer",
    company: "Zensar Technologies",
    location: "Pune (Remote)",
    duration: "March 2022 - July 2023",
    responsibilities: [
      "Optimized React app performance, achieving a 40% reduction in initial load time through code splitting, resulting in faster app startup and improved user experience.",
      "Achieved a 20% improvement in network efficiency by integrating TanStack Query, streamlining API calls and enhancing data-fetching performance.",
      "Reduced production app size by 20% through Webpack tree shaking, eliminating unused code and optimizing deployment performance.",
      "Reduced unnecessary re-renders by leveraging React.memo and optimizing useEffect dependencies, leading to a smoother user experience.",
      "Optimized API calls by 20% using the debounce technique, enhancing application performance.",
      "Boosted app responsiveness by 10% through advanced state management optimizations using React Profiler and DevTools.",
    ],
  },
];

export const HEADING = "Aquib's Portfolio";

export const RESUME_LINK =
  "https://drive.google.com/drive/folders/1V1xBWhXpqZZPutq4LCoZ5gklH2TtzfTx?usp=sharing";

export const ABOUT = {
  title: "About Me",
  introduction: [
    "Hi, I'm Aquib Sayyed, a passionate Frontend Developer with a B.Tech in Computer Science from SSGB COET, Bhusawal. I specialize in building user-friendly, efficient, and visually appealing web applications using modern technologies like React.js, Redux Toolkit, Tailwind CSS, and more.",
    "I have 1.5 years of professional experience at Zensar Technologies, where I contributed to developing scalable interfaces for enterprise applications. Currently, I'm exploring exciting opportunities to create impactful digital experiences.",
  ],
  whatIDo: {
    title: "What I Do:",
    items: [
      "Frontend Development: Crafting responsive, intuitive, and dynamic user interfaces.",
      "Feature-Rich Applications: Developing video streaming platforms, blogging platforms, and utility tools like a URL shortener.",
      "State Management: Efficiently managing complex application states using Redux Toolkit and Zustand.",
    ],
  },
  keyHighlights: {
    title: "Key Highlights:",
    items: [
      "Developed a YouTube-like video streaming app, featuring real-time search suggestions, live chat, and efficient API integration.",
      "Built Mega Blogs, a blogging platform with rich text editing, user authentication, and responsive design.",
      "Created Trimrr, a URL-shortening tool with analytics and QR code generation, deployed using Supabase.",
    ],
  },
  conclusion: [
    "Beyond coding, I actively share my learning journey on social media and have completed challenges like 50 Days of JavaScript and 30 Days of React, reflecting my dedication to continuous learning and growth.",
    "I'm always excited to tackle new challenges and bring innovative ideas to life!",
  ],
};
