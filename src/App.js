import { useEffect, useState } from "react";
import Aos from "aos";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Experiences from "./components/UI/Experiences";
import Modal from "./components/UI/Modal"

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Experiences />
        <Portfolio />
      </main>
      <Footer />
      {showModal && (
        <Modal
          activeID={1}
          setShowModal={setShowModal}
          showModalHandler={handleShowModal}
          handleCloseModal={handleCloseModal} // Menambahkan handleCloseModal ke Modal
        />
      )}
    </>
  );
}

export default App;
