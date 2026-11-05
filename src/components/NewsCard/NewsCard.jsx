import "./NewsCard.css";

function NewsCard({ article }) {
  const handleSaveClick = () => {
    console.log("Save article:", article.title);
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
          <span className="news-card__tooltip">Sign in to save articles</span>

          <button
            className="news-card__save-button"
            type="button"
            onClick={handleSaveClick}
            aria-label="Save article"
          >
            ♧
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

        <h3 className="news-card__title">{article.title}</h3>

        <p className="news-card__description">{article.description}</p>

        <p className="news-card__source">{article.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
