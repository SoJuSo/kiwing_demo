import { useEffect } from "react";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage.tsx/MainPage";

const App = () => {
  useEffect(() => {
    fetch("/api/v1/tags")
      .then((res) => res.json())
      .then((resp) => console.log(resp));
  });

  return (
    <>
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
