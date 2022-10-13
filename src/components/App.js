import { Routes, Route, Navigate } from "react-router-dom";
import CountedDay from "../pages/CountedDay";
import CountedDays from "../pages/CountedDays";
import "../assets/styles/reset.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/counted-days" />} />
          <Route path="/counted-days" element={<CountedDays />} />
          <Route path="/counted-day/:id" element={<CountedDay />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
