import NewsCard from "../NewsCard/NewsCard";
import { mockArticles } from "../../utils/mockData";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <h2 className="main__title">Search results</h2>

      <div className="main__cards">
        {mockArticles.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </section>
  );
}

export default Main;
