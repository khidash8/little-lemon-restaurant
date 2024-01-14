import { Link } from "react-router-dom";
import Logo from "../../assets/nav-logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between space-x-4 p-4 font-body ">
        {/* logo */}
        <img src={Logo} alt="logo" className="h-8" />
        {/* Navigation */}
        <nav className="hidden w-1/2 lg:block">
          <ul className="flex items-center justify-between text-xl text-gray-900">
            <li className="hover:text-gray-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/reservations">Reservations</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/order-online">Order</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link
                to="/login"
                className="rounded bg-primary-yellow px-6 py-2 text-secondary-dark transition duration-500 hover:border-primary-yellow hover:bg-transparent hover:text-primary-yellow hover:shadow-xl"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
