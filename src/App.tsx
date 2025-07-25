import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookaSlot from "./pages/BookaSlot";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <main className="main-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<BookaSlot />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
