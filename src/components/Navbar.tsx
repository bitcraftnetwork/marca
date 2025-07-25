import { CircleArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isBookings, setisBookings] = useState<boolean>(false);
  const location = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    if (location.pathname === "/bookings") {
      document.title = "Book a Slot";
      setisBookings(true);
    }
  }, [location, isBookings]);

  return (
    <div className="bg-helper-400">
      {location.pathname === "/bookings" && (
        <div className="pt-10 container !my-0" onClick={() => nav("/")}>
          <CircleArrowLeft className="h-10 w-10 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
