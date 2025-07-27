import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookaSlot from "./pages/BookaSlot";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<BookaSlot />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policies" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
