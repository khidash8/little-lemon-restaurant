import HeroImg from "../assets/food/food1.png";
import ReserveButton from "./Utils/ReserveButton";

const Header = () => {
  return (
    <header className="bg-primary-green">
      <div className="container mx-auto gap-4 p-4 lg:flex">
        {/* Left section */}
        <div className="flex-grow py-8 text-secondary-light">
          <h1 className="font-marakazi text-6xl font-bold text-primary-yellow">
            Little Lemon
          </h1>
          <h2 className=" font-marakazi text-3xl font-bold">Chicago</h2>
          <p className="my-4 text-xl">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>

          {/* Reserve button */}
          <ReserveButton prop={"Reserve a Table"} link={"/reservations"} />
        </div>

        {/* Right section */}
        <div
          className=" my-auto h-72 rounded bg-cover bg-center bg-no-repeat shadow-lg lg:w-2/3"
          style={{ backgroundImage: `url(${HeroImg})` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
