import { Link } from "react-router-dom";

const ReserveButton = ({ prop, link, className }) => {
  return (
    <Link
      to={link}
      className={`inline-block rounded bg-primary-yellow p-4 text-xl text-secondary-dark transition duration-500 hover:border-primary-yellow hover:bg-transparent hover:text-primary-yellow hover:shadow-xl ${className}`}
    >
      {prop}
    </Link>
  );
};

export default ReserveButton;
