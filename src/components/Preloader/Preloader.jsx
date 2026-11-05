import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Loading articles">
      <div className="preloader__circle"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
