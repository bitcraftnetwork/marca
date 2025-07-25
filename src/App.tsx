import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookaSlot from "./pages/BookaSlot";

function App() {
  return (
    <BrowserRouter>
      <main className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<BookaSlot />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
