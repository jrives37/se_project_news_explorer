import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles, loggedIn, onSaveArticle }) {
  const keywords = [
    ...new Set(savedArticles.map((article) => article.keyword).filter(Boolean)),
  ];

  const keywordText = keywords.length
    ? keywords.slice(0, 2).join(", ") +
      (keywords.length > 2 ? `, and ${keywords.length - 2} other` : "")
    : "No keywords yet";

  return (
    <main className="saved-news">
      <div className="saved-news__container">
        <p className="saved-news__subtitle">Saved articles</p>

        <h1 className="saved-news__title">
          You have {savedArticles.length} saved{" "}
          {savedArticles.length === 1 ? "article" : "articles"}
        </h1>

        <p className="saved-news__description">
          By keywords: <strong>{keywordText}</strong>
        </p>
      </div>

      {savedArticles.length === 0 ? (
        <p className="saved-news__empty">You haven't saved any articles yet.</p>
      ) : (
        <div className="saved-news__results">
          <div className="saved-news__cards">
            {savedArticles.map((article) => (
              <NewsCard
                key={article.url}
                article={article}
                loggedIn={loggedIn}
                isSaved={true}
                isSavedPage={true}
                onSaveArticle={onSaveArticle}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default SavedNews;
