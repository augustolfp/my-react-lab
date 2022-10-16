import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DataProvider } from "./contexts/DataContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./contexts/AuthProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </DataProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.querySelector(".root")
);
