import "./assets/styles/reset.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CountedDay from "./pages/CountedDay";
import CountedDays from "./pages/CountedDays";
import CounterPage from "./pages/CounterPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/counted-days" />} />
        <Route path="/counted-days" element={<CountedDays />} />
        <Route path="/counted-day/:id" element={<CountedDay />} />
        <Route path="/counter-page" element={<CounterPage />} />
      </Routes>
    </>
  );
}
