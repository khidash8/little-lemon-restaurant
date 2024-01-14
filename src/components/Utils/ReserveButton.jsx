import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReserveButton = ({ prop, link, className, events }) => {
  return (
    <Link
      to={link}
      className={`inline-block rounded bg-primary-yellow p-4 text-xl text-secondary-dark transition duration-500 hover:border-primary-yellow hover:bg-transparent hover:text-primary-yellow hover:shadow-xl ${className}pointer-events-${events}`}
    >
      {prop}
    </Link>
  );
};

ReserveButton.propTypes = {
  prop: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default ReserveButton;
