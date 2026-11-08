import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main({
  articles,
  isLoading,
  searchError,
  hasSearched,
  loggedIn,
  savedArticles,
  onSaveArticle,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  if (!hasSearched) {
    return null;
  }

  if (isLoading) {
    return (
      <section className="main">
        <Preloader />
      </section>
    );
  }

  if (searchError) {
    return (
      <section className="main">
        <p className="main__message">{searchError}</p>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="main">
        <h2 className="main__title">Nothing Found</h2>
        <p className="main__message">
          Sorry, but nothing matched your search terms.
        </p>
      </section>
    );
  }

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < articles.length;

  const handleShowMore = () => {
    setVisibleCount((previousCount) => previousCount + 3);
  };

  return (
    <section className="main">
      <h2 className="main__title">Search results</h2>

      <div className="main__cards">
        {visibleArticles.map((article, index) => (
          <NewsCard
            key={article.url || index}
            article={article}
            loggedIn={loggedIn}
            isSaved={savedArticles.some(
              (savedArticle) => savedArticle.url === article.url,
            )}
            onSaveArticle={onSaveArticle}
          />
        ))}
      </div>

      {hasMoreArticles && (
        <button
          className="main__show-more"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default Main;
