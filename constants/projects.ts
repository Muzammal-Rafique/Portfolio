interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  link1: string;
  link2: string;
  imageSrc: string;
}

export const projectData: ProjectData[] = [
  {
    title: "Nike Store",
    description: "A Next.js-powered eCommerce platform showcasing the latest Nike shoe collection with a seamless shopping experience.",
    tags: ["Next JS", "TypeScript", "Tailwind CSS",'DaisyUI', "Cart", "Checkout"],
    link1: "https://nike-shoes-store-nine.vercel.app/",
    link2: "https://github.com/Muzammal-Rafique/Nike-Store-.git",
    imageSrc: "/nike-store.png",
  },
  {
    title: "Sushi",
    description: "Sushi is the simple template that is developed by using the pure HTML and CSS. Convert figma to HTML and CSS",
    tags: ["HTML", "CSS", "Animation", "Flexbox", "Figma", "Responsive"],
    link1: "https://sushi-template.netlify.app/",
    link2: "https://github.com/Muzammal-Rafique/Sushi.git",
    imageSrc: "/sushi.png",
  },
  {
    title: "HooBank",
    description: "HooBank is a straightforward banking application designed with a modern UI/UX using React.js and Tailwind CSS.",
    tags: ["React","Vite", "TypeScript", "Tailwind CSS", "UI/UX", "Responsive"],
    link1: "https://hoobank-by-me.netlify.app/",
    link2: "https://github.com/Muzammal-Rafique/Hoobank.git",
    imageSrc: "/hoobank.png",
  },
  {
    title: "Issue Tracker App",
    description: "This is an Issue-tracker app that is develop by using the next js .In this app user can read, write, delete and create an Issue and save these issues in MySQL.",
    tags: ["Next JS", "TypeScript", "Tailwind CSS", "Redix UI","MySQL","Prisma", "Responsive"],
    link1: "https://issue-tracker-app-mu.vercel.app/",
    link2: "https://github.com/Muzammal-Rafique/Issue-Tracker.git",
    imageSrc: "/issue-tracker.png",
  },
  
];
