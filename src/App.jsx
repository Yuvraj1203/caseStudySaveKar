import { useState } from "react";
import Head from "./components/Head";
import Footer from "./components/Footer";
import SectionPage from "./components/SectionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Casest from "./components/Casest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route
          path="/"
          element={
            <SectionPage
              page="Home Page"
              image="http://localhost/savekar/wp-content/uploads/2024/05/FinancialPreparation.svg"
            />
          }
        />
        <Route
          path="about"
          element={
            <SectionPage
              page="About Us Page"
              image="http://localhost/savekar/wp-content/uploads/2024/05/whyteams2.svg"
            />
          }
        />
        <Route
          path="service"
          element={
            <SectionPage
              page="Service Page"
              image="http://localhost/savekar/wp-content/uploads/2024/05/Receivable.svg"
            />
          }
        />
        <Route
          path="contact"
          element={
            <SectionPage
              page="Contact Us Page"
              image="http://localhost/savekar/wp-content/uploads/2024/05/BookkeepingServices.svg"
            />
          }
        />
        <Route
          path="study"
          element={
            <Casest />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
