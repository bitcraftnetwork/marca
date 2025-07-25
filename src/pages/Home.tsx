import { useNavigate } from "react-router-dom";
import Button from "./../components/Button";

function Home() {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/bookings");
  };

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center flex-col text-center">
          <h1 className="text-4xl font-black text-heading">
            GROW & SELL ON SOCIAL MEDIA
          </h1>
          <p className="text-4xl font-black text-heading leading-[1.3em]">
            AS A BUSY BUSINESS OWNER.
          </p>
          <p className="text-lg mt-4">
            <span className="font-bold">Done for you</span> monthly social media
            marketing services.
          </p>
          <div className="btn-container self-center mt-10">
            <Button
              variant="solid"
              color="secondary"
              size="lg"
              onClick={handleClick}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Client Results Section */}
      <div className="container">
        <div
          className="w-full flex justify-center py-16"
          style={{ backgroundColor: "#f6985f" }}
        >
          {/* Fixed-width container (same width as green box in screenshot) */}
          <div className="w-full max-w-[920px] px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              CLIENT BEFORE & AFTER RESULTS
            </h2>
            <p className="text-gray-700 text-sm mt-2">
              We Work With New & Established Accounts.
            </p>

            {/* Screenshots Column */}
            <div className="mt-12 flex flex-col justify-center items-center gap-6">
              <img
                src="../public/Insta_ref_1.jpg"
                alt="Instagram Ref1"
                className="w-full md:w-[820px] h-auto rounded-md shadow-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />

              <img
                src="../public/Insta_ref_2.jpg"
                alt="Instagram Ref2"
                className="w-full md:w-[820px] h-auto rounded-md shadow-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />

              <img
                src="../public/Insta_ref_3.jpg"
                alt="Instagram Ref3"
                className="w-full md:w-[820px] h-auto rounded-md shadow-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
              <img
                src="../public/insta_ref_4.jpg"
                alt="Instagram Ref4"
                className="w-full md:w-[820px] h-auto rounded-md shadow-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
              <img
                src="../public/insta_ref_5.jpg"
                alt="Instagram Ref5"
                className="w-full md:w-[820px] h-auto rounded-md shadow-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
              <img
                src="../public/insta_ref_6.jpg"
                alt="Instagram Ref6"
                className="w-full md:w-[820px] h-auto rounded-md shadow-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
              <img
                src="../public/insta_ref_7.jpg"
                alt="Instagram Ref7"
                className="w-full md:w-[820px] h-auto rounded-md shadow-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
              <img
                src="../public/insta_ ref_8.jpg"
                alt="Instagram Ref8"
                className="w-full md:w-[820px] h-auto rounded-md shadow-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
            </div>
          </div>

          {/* Testimonial box */}
        </div>
      </div>
    </>
  );
}

export default Home;
