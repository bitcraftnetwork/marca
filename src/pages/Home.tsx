import FAQAccordion from "../components/accordians/FaqAccordians";
import BookACallBtn from "../components/BookACallBtn";
import { faq, imagesData } from "../utils/consts";
import Image from "./../components/Image";
import HowItWorks from "./HowItWorks";
import heroSvg from "../assets/hero1.svg";
function Home() {
  return (
    <>
      {/* Hero section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-center max-md:flex-col">
            <div className="flex items-center justify-center flex-col text-center gap-2">
              <div className="flex items-center justify-center flex-col text-center">
                <h1 className="md:text-4xl text-2xl font-black text-heading leading-[1.3em] md:max-w-[650px] max-w-[350px]">
                  GROW & SELL ON SOCIAL MEDIA AS A BUSY BUSINESS OWNER.
                </h1>
              </div>
              <p className="text-lg font-medium">
                <span className="font-bold">Done for you</span> monthly social
                media marketing services.
              </p>
              <div className="btn-container self-center">
                <BookACallBtn
                  variant="solid"
                  color="primary"
                  size="lg"
                  text="Get Started"
                />
              </div>
            </div>
            {/* <div className="hero-image max-md:pt-12">
              <Image src={heroSvg} />
            </div> */}
          </div>
        </div>
      </section>
      {/* Before & After */}
      <section className="py-6 ">
        <div className="container">
          <div className="section pb-12">
            <div className="section-title flex items-center justify-center flex-col gap-2">
              <div className="flex items-center justify-center text-center gap-2 flex-col">
                <h2 className="md:text-4xl text-2xl font-bold">
                  CLIENT BEFORE & AFTER RESULTS
                </h2>
              </div>
              <p className="text-md font-medium">
                We Work With New & Established Accounts.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            {imagesData.map((image) => (
              <Image src={image.src} key={image.id} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>
      {/* How it works */}
      <HowItWorks />
      {/* FAQ section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mb-0">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our social media services for
              healthcare professionals
            </p>
          </div>

          <FAQAccordion faqData={faq} className="mb-8" />
        </div>
      </section>
    </>
  );
}

export default Home;
