import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} NewsExplorer
      </p>

      <nav className="footer__navigation">
        <a href="/">Home</a>

        <a
          href="https://tripleten.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          TripleTen
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
