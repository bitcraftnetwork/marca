import BookACallBtn from "../components/BookACallBtn";
import { FeatureCard } from "../components/cards/hiw";
import { features } from "../utils/consts";

const HowItWorks = () => {
  const handleButtonClick = (cardTitle: string) => {
    console.log(`Button clicked for: ${cardTitle}`);
  };

  return (
    <section className="section-wrapper md:py-6 py-0.5 bg-black/10">
      <div className="container">
        <div className="section-title mb-6">
          <section className="text-center px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Our services
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-600 max-w-2xl mx-auto mb-12">
              We craft digital solutions that help healthcare professionals
              build visibility, engage patients, and grow their practice online.
            </p>
          </section>
        </div>
        <div className="flex flex-col items-center md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-8 max-md:space-y-5">
          {features.slice(0, 3).map((feature, index) => (
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
        <div className="flex items-center justify-center mt-8 md:mt-6 gap-8">
          <div className="flex max-md:flex-col space-y-5 h-full w-full items-center justify-center gap-8 ">
            {features.slice(3, 5).map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                buttonText="Learn More"
                onButtonClick={() => handleButtonClick(feature.title)}
                showButton={false}
                containerClassName="!m-0 h-full w-full flex-shri flex-1"
              />
            ))}
          </div>
        </div>
        <div className="w-full text-center md:mt-10 my-6">
          <BookACallBtn
            variant="solid"
            color="dark"
            size="xl"
            text="Book A Call"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
