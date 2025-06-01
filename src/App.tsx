import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Internships from "./pages/internships";

import { useDropdown } from '@/lib/dropdownContext';

function App() {
  const { isDropdownOpen } = useDropdown(); 

  return (
    <Router>
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 pointer-events-auto"></div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
    </Router>
  );
}

export default App;