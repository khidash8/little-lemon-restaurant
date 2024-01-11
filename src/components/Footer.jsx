import FooterImg from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <div className="border-b-4 border-green-950 bg-primary-green p-6">
      <footer className="container mx-auto items-center justify-between gap-5 text-center lg:flex lg:px-7 lg:text-left">
        <img
          src={FooterImg}
          alt="logo"
          className="mb-4 inline-block h-full w-20 rounded object-cover lg:mb-0"
        />

        {/* Navigation part */}
        <div className="flex-grow justify-evenly space-y-8 font-body text-secondary-light md:lg:flex lg:space-y-0">
          {/* Nav links */}
          <nav>
            <h2 className="mb-2 text-xl font-bold">Doormat Navigation</h2>
            <ul className="space-y-2">
              <li className="hover:opacity-80">
                <a href="/">Home</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#">About</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#">Menu</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#">Reservations</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#">Order Online</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <nav>
            <h2 className="mb-2 text-xl font-bold opacity-90">Contact</h2>
            <ul className="space-y-2 opacity-80">
              <li className="hover:opacity-80">
                <a href="#">Adress</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#">phone number</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#">email</a>
              </li>
            </ul>
          </nav>
          {/* Social Media links */}
          <nav>
            <h2 className="mb-2 text-xl font-bold opacity-90">
              Social Media Links
            </h2>
            <ul className="space-y-2 opacity-80">
              <li className="hover:opacity-80">
                <a href="#">facebook</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#">instagram</a>
              </li>
              <li className="hover:opacity-80">
                <a href="#"></a>pinterest
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
