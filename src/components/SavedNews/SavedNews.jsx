import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles, loggedIn, onSaveArticle }) {
  return (
    <main className="saved-news">
      <h1 className="saved-news__title">Your saved articles</h1>

      <p className="saved-news__count">{savedArticles.length} saved articles</p>

      {savedArticles.length === 0 ? (
        <p className="saved-news__empty">You haven't saved any articles yet.</p>
      ) : (
        <div className="saved-news__cards">
          {savedArticles.map((article) => (
            <NewsCard
              key={article.url}
              article={article}
              loggedIn={loggedIn}
              isSaved={true}
              onSaveArticle={onSaveArticle}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default SavedNews;
