import { Routes, Route, Navigate } from "react-router-dom";
import CountedDay from "../pages/CountedDay";
import CountedDays from "../pages/CountedDays";
import "../assets/styles/reset.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { DataProvider } from "../contexts/DataContext";
import { QueryClient, QueryClientProvider } from "react-query";
import CounterPage from "../pages/CounterPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/counted-days" />} />
            <Route path="/counted-days" element={<CountedDays />} />
            <Route path="/counted-day/:id" element={<CountedDay />} />
            <Route path="/counter-page" element={<CounterPage />} />
          </Routes>
        </ThemeProvider>
      </DataProvider>
    </QueryClientProvider>
  );
}
