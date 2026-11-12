import "./NewsCard.css";

function NewsCard({ article, loggedIn, isSaved, onSaveArticle }) {
  const handleSaveClick = () => {
    if (loggedIn) {
      onSaveArticle(article);
    }
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={article.urlToImage}
          alt={article.title}
        />

        <div className="news-card__save-container">
          {!loggedIn && (
            <span className="news-card__tooltip">Sign in to save articles</span>
          )}

          <button
            className={`news-card__save-button ${
              isSaved ? "news-card__save-button_saved" : ""
            }`}
            type="button"
            onClick={handleSaveClick}
            disabled={!loggedIn}
            aria-label={isSaved ? "Unsave article" : "Save article"}
            aria-pressed={Boolean(isSaved)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isSaved ? "#2f71e5" : "none"}
              stroke={isSaved ? "#2f71e5" : "#1a1b22"}
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 3H18V21L12 17L6 21V3Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <h3 className="news-card__title">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>

        <p className="news-card__description">{article.description}</p>

        <p className="news-card__source">
          {article.source?.name || "Unknown source"}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
