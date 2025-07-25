import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Calendly from "../components/Calendly";

function BookaSlot() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/bookings") {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [location]);

  return (
    <>
      <div className="wrapper bg-helper-300 h-screen w-screen">
        <div className="container !mt-0">
          <div className="section flex items-center justify-center flex-col gap-3">
            <h1 className="text-5xl font-bold text-heading text-center pt-10 uppercase">
              Book a Slot
            </h1>
            <div className="subtitle text-xl font-medium">
              Submit Your Details{" "}
              <span className=" font-bold text-heading">Below</span>
            </div>
          </div>
          <div className="wrapper-calendly">
            <Calendly />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookaSlot;

