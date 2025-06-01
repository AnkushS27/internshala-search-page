import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/navbar.tsx";
import { DropdownProvider } from "./lib/dropdownContext.tsx";
import Footer from "./components/footer.tsx";
import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <DropdownProvider>
      <Header />
      <App />
      <Footer />
    </DropdownProvider>
  </StrictMode>
);
