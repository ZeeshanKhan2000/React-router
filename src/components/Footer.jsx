

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-socials">
        <a href="#" aria-label="Facebook" className="social-icon">🌐</a>
        <a href="#" aria-label="Twitter" className="social-icon">🐦</a>
        <a href="#" aria-label="LinkedIn" className="social-icon">🔗</a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
