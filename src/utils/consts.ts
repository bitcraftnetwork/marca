import {
  BookHeart,
  Clapperboard,
  FileVideo2,
  ScrollIcon,
  Search,
} from "lucide-react";

type ImageData = {
  id: string;
  src: string;
  alt: string;
  wrapperClass: string;
  imageClass: string;
  url: string;
};
// Images array for dynamic component rendering
export const imagesData: ImageData[] = [
  {
    id: "drmithunpanchal1",
    src: "/DRMITHUNPANCHAL.jpeg",
    alt: "Dr. Mithun Panchal",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/drmithunpanchal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "drmithunyoutube",
    src: "/drmithunyoutube.jpg",
    alt: "Dr. Mithun YouTube",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://youtube.com/@drmithunpanchal?si=cXGaubjatcKjfJWO",
  },
  {
    id: "draditya",
    src: "/DRADITYA.jpeg",
    alt: "Dr. Aditya",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/skincarewithdraditya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "drsandip",
    src: "/drsandip.jpg",
    alt: "Dr. Sandip",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/drsandipmavani/?utm_source=ig_web_button_share_sheet",
  },
  {
    id: "drashish",
    src: "/drashish.jpg",
    alt: "Dr. Ashish",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/drashishdesaineuro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "aadicura",
    src: "/aadicura.jpg",
    alt: "aadicura",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/aadicurahospitals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "drdhurtii",
    src: "/drdhurti.jpg",
    alt: "Dr. Dhurtii",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/dr.dhrutianklesaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "drdhurtii1",
    src: "/drdhurti1.jpg",
    alt: "Dr. Dhurtii",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/dr.dhrutianklesaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "drsumit3",
    src: "/drsumit3.jpg",
    alt: "Dr. Sumit 3",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/drsumitkapadia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "dryuvi1",
    src: "/dryuvi1.jpg",
    alt: "Dr. Yuvi",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "https://www.instagram.com/doctoryuvi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },

  {
    id: "devendra",
    src: "/DRDEVENDRA.jpeg",
    alt: "Dr. Devendra",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "",
  },
  {
    id: "Preay",
    src: "/DRPREAYMEHTA1.jpeg",
    alt: "Dr. Preay Mehta",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "",
  },
  {
    id: "Preay",
    src: "/DRPREAYMEHTA.jpeg",
    alt: "Dr. Preay Mehta",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "",
  },
  {
    id: "Sandip",
    src: "/DRSANDIP.jpeg",
    alt: "Dr. Sandip",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "",
  },
  {
    id: "Sumit",
    src: "/DRSUMIT3.jpeg",
    alt: "Dr. Sumit",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "",
  },
  {
    id: "DRASHTI",
    src: "/DRDRASHTI.jpeg",
    alt: "Dr. Drashti",
    wrapperClass: "h-[200px] md:h-[450px] md:mt-10 mt-5",
    imageClass: "!object-contain",
    url: "",
  }, 
];
export const faq = [
  {
    question: "Who is this for?",
    answer:
      "This is for doctors, clinic owners, surgeons, and hospital, pharma companies who want to use social media to grow their visibility, attract more patients, and build a trusted personal or institutional brand.",
  },
  {
    question: "Why should a doctor be on social media?",
    answer:
      "Because over 80% of patients search online before choosing a doctor. If you're not visible where they're looking, you're missing out on trust, visibility, and new patient opportunities. Social media helps you educate, connect, and build credibility — long before a patient walks into your clinic.",
  },
  {
    question: "Does this help in business growth?",
    answer:
      "Yes. A strong digital presence increases trust, improves visibility, and directly impacts patient inflow, brand authority, and long-term business growth.",
  },
  {
    question: "How much time does it take?",
    answer:
      "Just 2–3 hours a month from your side. We handle the rest — from content creation to strategy execution — so you can focus on your practice.",
  },
  {
    question: "What if I already have a social media page?",
    answer:
      "Perfect. We’ll audit your current presence, refine your strategy, and take it to the next level — with better content, engagement, and conversion.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "Our track record speaks for itself. While we can't promise specific follower counts, views, or patient inquiries in the ever-changing world of social media,we do guarantee a proven strategy, consistent execution, and complete commitment to growing your personal brand. The doctors who see the best results are the ones who trust the process and stay consistent and we're with you every step of the way.",
  },
];

export const features = [
  {
    icon: Search,
    title: "#1. RESEARCH",
    description:
      "We research and analyze top-performing creators and content in your niche on social media to strategically build and establish your unique brand identity.",
  },
  {
    icon: ScrollIcon,
    title: "#2. SCRIPTING",
    description:
      "Using the research and information on you and your business. We script an entire month of short form content.",
  },
  {
    icon: Clapperboard,
    title: "#3. FILMING",
    description:
      "We shoot all our content in a dedicated, professionally designed setup to ensure high-quality visuals and consistency.",
  },
  {
    icon: FileVideo2,
    title: "#4. EDITING",
    description:
      "We edit videos using high-quality visuals and sound effects to make the content engaging and visually appealing.",
  },
  {
    icon: BookHeart,
    title: "#5. SOCIAL MEDIA MANAGEMENT",
    description:
      "We manage social media accounts, upload content consistently, and optimize it for maximum reach and engagement.",
  }
];

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Bookings", href: "/bookings" },
  { name: "Blogs", href: "/blogs" },
];
