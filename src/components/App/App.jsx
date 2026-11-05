import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSignInClick = () => {
    setActiveModal("login");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <Header onSignInClick={handleSignInClick} />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section className="app__search-section">
                <div className="app__search-content">
                  <h1 className="app__title">What's going on in the world?</h1>

                  <p className="app__subtitle">
                    Find the latest news on any topic and save articles you
                    like.
                  </p>

                  <SearchForm />
                </div>
              </section>

              <Main />
              <About />
            </main>
          }
        />

        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onSignUpClick={handleSignUpClick}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeModal}
        onSignInClick={handleSignInClick}
      />
    </div>
  );
}

export default App;
