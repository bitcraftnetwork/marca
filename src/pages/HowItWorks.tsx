import {
    CameraIcon,
    Computer,
    ScrollIcon,
    Search,
    Target,
    TrendingUp,
    Users
} from "lucide-react";
import { FeatureCard } from "../components/cards/hiw";
import BookACallBtn from "../components/BookACallBtn";

const HowItWorks = () => {
  const handleButtonClick = (cardTitle: string) => {
    console.log(`Button clicked for: ${cardTitle}`);
  };
  const features = [
    {
      icon: Search,
      title: "#1. RESEARCH",
      description:
        "We find and study the top creators/best preforming content in your niche on social media.",
    },
    {
      icon: ScrollIcon,
      title: "#2. SCRIPT",
      description:
        "Using the research and information on you and your business. We script an entire month of short form content.",
    },
    {
      icon: CameraIcon,
      title: "#3. FILM & EDIT",
      description: "You film the scripts. We edit the videos.",
    },
    {
      icon: Computer,
      title: "#4. UPLOAD",
      description:
        "We upload the content on your chosen social media channels (Instagram, TikTok, Facebook, Youtube, Linkedin).",
    },
  ];
  return (
    <div className="container">
      <div className="section-title">
        <h2 className="md:text-3xl text-2xl font-bold text-center">
          HOW IT WORKS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            buttonText="Learn More"
            onButtonClick={() => handleButtonClick(feature.title)}
            showButton={false}
          />
        ))}
      </div>
      <div className="w-full text-center mt-5">
        <BookACallBtn
          variant="solid"
          color="dark"
          size="xl"
          text="Book A Call"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
