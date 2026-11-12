import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getNews } from "../../utils/newsApi";

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
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("newsExplorerToken") === "mock-token";
  });
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchId, setSearchId] = useState(0);

  // Open login modal
  const handleSignInClick = () => {
    setActiveModal("login");
  };

  // Open registration modal
  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  // Close modal
  const closeModal = () => {
    setActiveModal("");
  };

  const handleLogin = () => {
    localStorage.setItem("newsExplorerToken", "mock-token");
    setLoggedIn(true);
    setActiveModal("");
  };
  const handleRegister = () => {
    localStorage.setItem("newsExplorerToken", "mock-token");
    setLoggedIn(true);
    setActiveModal("");
  };

  const handleLogout = () => {
    localStorage.removeItem("newsExplorerToken");
    setLoggedIn(false);
    setSavedArticles([]);
  };

  // Close modals when Escape is pressed
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

  const handleSearch = (keyword) => {
    setSearchId((previousId) => previousId + 1);
    setIsLoading(true);
    setSearchError("");
    setHasSearched(true);
    setArticles([]);

    getNews(keyword)
      .then((newsArticles) => {
        setArticles(newsArticles);
      })
      .catch((err) => {
        console.error(err);
        setSearchError(
          "Sorry, something went wrong during the request. Please try again later.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Save or unsave an article
  const handleSaveArticle = (article) => {
    if (!loggedIn) {
      return;
    }

    setSavedArticles((previousArticles) => {
      const isAlreadySaved = previousArticles.some(
        (savedArticle) => savedArticle.url === article.url,
      );

      if (isAlreadySaved) {
        return previousArticles.filter(
          (savedArticle) => savedArticle.url !== article.url,
        );
      }

      return [...previousArticles, article];
    });
  };

  return (
    <div className="app">
      <Header
        onSignInClick={handleSignInClick}
        loggedIn={loggedIn}
        onLogout={handleLogout}
      />

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

                  <SearchForm onSearch={handleSearch} />
                </div>
              </section>

              <Main
                key={searchId}
                articles={articles}
                isLoading={isLoading}
                searchError={searchError}
                hasSearched={hasSearched}
                loggedIn={loggedIn}
                savedArticles={savedArticles}
                onSaveArticle={handleSaveArticle}
              />

              <About />
            </main>
          }
        />

        <Route
          path="/saved-news"
          element={
            <SavedNews
              savedArticles={savedArticles}
              loggedIn={loggedIn}
              onSaveArticle={handleSaveArticle}
            />
          }
        />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onSignUpClick={handleSignUpClick}
        onLogin={handleLogin}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeModal}
        onSignInClick={handleSignInClick}
        onRegister={handleRegister}
      />
    </div>
  );
}

export default App;
