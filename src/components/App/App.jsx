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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [searchId, setSearchId] = useState(0);
  const handleSignInClick = () => {
    setActiveModal("login");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const handleLogin = () => {
    localStorage.setItem("newsExplorerToken", "mock-token");
    setLoggedIn(true);
    closeModal();
  };

  const handleRegister = () => {
    localStorage.setItem("newsExplorerToken", "mock-token");
    setLoggedIn(true);
    closeModal();
  };

  const handleLogout = () => {
    localStorage.removeItem("newsExplorerToken");
    setLoggedIn(false);
    setSavedArticles([]);
  };

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveModal("");
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal]);

  const handleSearch = (keyword) => {
    setCurrentKeyword(keyword);
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

      return [
        ...previousArticles,
        {
          ...article,
          keyword: currentKeyword,
        },
      ];
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div className="app__hero">
                <Header
                  onSignInClick={handleSignInClick}
                  loggedIn={loggedIn}
                  onLogout={handleLogout}
                />

                <section className="app__search-section">
                  <div className="app__search-content">
                    <h1 className="app__title">
                      What's going on in the world?
                    </h1>

                    <p className="app__subtitle">
                      Find the latest news on any topic and save articles you
                      like.
                    </p>

                    <SearchForm onSearch={handleSearch} />
                  </div>
                </section>
              </div>

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
            <ProtectedRoute loggedIn={loggedIn}>
              <>
                <Header
                  onSignInClick={handleSignInClick}
                  loggedIn={loggedIn}
                  onLogout={handleLogout}
                />
                <SavedNews
                  savedArticles={savedArticles}
                  onSaveArticle={handleSaveArticle}
                  loggedIn={loggedIn}
                />
              </>
            </ProtectedRoute>
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
