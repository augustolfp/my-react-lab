import { Routes, Route, Navigate } from "react-router-dom";
import CountedDay from "../pages/CountedDay";
import CountedDays from "../pages/CountedDays";
import "../assets/styles/reset.css";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/counted-days" />} />
        <Route path="/counted-days" element={<CountedDays />} />
        <Route path="/counted-day/:id" element={<CountedDay />} />
      </Routes>
    </ThemeProvider>
  );
}
