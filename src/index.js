import ReactDOM from "react-dom";
import App from "./components/App";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
  document.querySelector(".root")
);
