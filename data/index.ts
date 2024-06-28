export const navItems = [
  { name: "Top", link: "#top" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Books", link: "#books" },
  { name: "Work", link: "#work" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "m-2 lg:col-span-2 md:col-span-6 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end mt-20 md:mt-0",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Coding and Composing",
    description: "Aiming to contribute to the world through",
    className: "m-2 lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "m-2 lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I intend to integrate my music with coding to create my own products",
    description: "I am a Web/Mobile developer, music producer, composer and pianist",
    className: "m-2 lg:col-span-1 md:col-span-3 md:row-span-1",
    // imgClassName: "mt-[170px] ml-[100px] rounded-lg border border-white",
    imgClassName: "h-full w-full opacity-25",
    titleClassName: "justify-start",
    img: "/piano4.png",
    spareImg: "/grid.svg",
  },
  {
    id: 5,
    title: "Web and mobile technologies such as MERN stack and Next JS",
    description: "Working towards building products that will benefit the society using",
    className: "m-2 md:-mr-2 lg:mr-0.5 md:col-span-2 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "m-2 lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "gap-7 justify-center sm:max-w-full max-w-60 text-center -mt-16 md:-mt-0 -mb-18 md:mb-20",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Movie Website UI",
    des: "A UI website created using TypeScript, React and Material UI. Site link is available in the repo readme.",
    img: "/jeric-movie-site.png",
    iconLists: ["/re.svg", "/ts.svg", "/mui.svg"],
    link: "https://github.com/JericFederer/cg-react-typescript-material-ui-movies-website/tree/main",
  },
  {
    id: 2,
    title: "YouTube Clone",
    des: "A YouTube clone using RapidAPI, React and Material UI. Site link is available in the repo readme.",
    img: "/youtube-clone.png",
    iconLists: ["/re.svg", "/js.svg", "/mui.svg"],
    link: "https://github.com/JericFederer97/react-youtube-clone",
  },
  {
    id: 3,
    title: "React Native Portfolio Repository List",
    des: "A link tree to the portfolio mobile apps that I have made that showcases features I used to become a React Native developer",
    img: "/react-native.svg",
    iconLists: ["/re.svg", "/js.svg", "/ts.svg"],
    link: "https://jericfederer97.github.io/link-tree-react-native/",
  },
  {
    id: 4,
    title: "Swift UI Portfolio Repository List",
    des: "A link tree to the portfolio mobile apps that I have made that showcases features I used to become a Swift UI developer",
    img: "/swift.svg",
    iconLists: ["/swift.svg"],
    link: "https://jericfederer97.github.io/link-tree-swift-ui/",
  },
];

export const books = [
  {
    quote: `The mind guides our footsteps as we progress along the pathway of life. Purity of mind leads inevitably to purity of life, to the precious love and understanding that should control our everyday acts and attitudes towards friends and foes.`,
    name: "James Allen",
    title: "As a Man Thinketh",
    img: "/book-as-a-man-thinketh.png"
  },
  {
    quote: `By dipping into this little book of simple Zen Buddhist sayings, you can calm your anxiety and return serenity to your soul.`,
    name: "Shinsuke Hosokawa",
    title: "Zen Wisdom for the Anxious",
    img: "/book-zen-wisdom.png"
  },
  {
    quote: `The Stoic writings of the philosopher Seneca offer powerful insights into the art of living, the importance of reason and morality, and continue to provide profound guidance to many through their eloquence, lucidity and timeless wisdom.`,
    name: "Seneca",
    title: "On The Shortness of Life",
    img: "/book-on-the-shortness-of-life.png"
  },
  {
    quote: `“The impediment to action advances action. What stands in the way becomes the way.” — Marcus Aurelius. We are stuck, stymied, frustrated. But it needn’t be this way. Faced with impossible situations, they found the astounding triumphs we all seek.`,
    name: "Ryan Holiday",
    title: "The Obstacle is the Way",
    img: "/book-the-obstacle-is-the-way.png"
  },
  {
    quote: `A beautifully packaged daily devotional of Stoic wisdom, featuring new translations of the most celebrated Stoics with historical context and practical tips from bestselling author Ryan Holiday.`,
    name: "Ryan Holiday",
    title: "The Daily Stoic",
    img: "/book-the-daily-stoic.png"
  },
  {
    quote: `What would be possible if you followed through on your best intentions? What could you accomplish if you could stay focused and overcome distractions? What if you had the power to become "indistractable"?  `,
    name: "Nir Eyal",
    title: "Indistractable",
    img: "/book-indistractable.png"
  },
  {
    quote: `Intimate in scale yet epic in scope, Upgrade is an intricately plotted, lightning-fast tale that charts one man’s thrilling transformation, even as it asks us to ponder the limits of our humanity—and our boundless potential.`,
    name: "Blake Crouch",
    title: "Upgrade",
    img: "/book-upgrade.png"
  },
  
];

export const companies = [
  {
    id: 1,
    name: "Company One",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Company Two",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Company Three",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Company Four",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Company Five",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    desc: "Developed new features and performed bug-fixing for a repository platform used by over 500 Japanese universities using JavaScript and Python.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front-end Web Developer",
    desc: "Developed and maintained a data management website as well as a data-manipulation website for Netsuite GUI using JavaScript",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Python Developer",
    desc: "Developed automation scripts for a mobile data network device using its Python API resulting in significant decrease in operation time when performing device-related operations.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Data Engineer",
    desc: "Developed scripts for cleaning data files, validation, automated reports and db-insertion.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JericFederer?tab=repositories"
  },
  {
    id: 2,
    img: "/git2.svg",
    link: "https://github.com/JericFederer97?tab=repositories"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bandong-jose-enrico-aba48527a/"
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://jericfederer97.github.io/tokiochouetsu-link-tree/"
  },
];