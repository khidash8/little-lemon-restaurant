import FooterImg from "../assets/icons_assets/lemon dessert.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={FooterImg} alt="" />

      {/* Nav links */}
      <nav>
        <h2>Doormat Nav igation</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>

      {/* Contact */}
      <nav>
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="#">Adress</a>
          </li>
          <li>
            <a href="#">phone number</a>
          </li>
          <li>
            <a href="#">email</a>
          </li>
        </ul>
      </nav>

      {/* Social Media links */}
      <nav>
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a href="#">facebook</a>
          </li>
          <li>
            <a href="#">instagram</a>
          </li>
          <li>
            <a href="#"></a>pinterest
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
