import Food4 from "../../assets/food/food4.webp";
import Food5 from "../../assets/food/food5.jpeg";

const HomeAbout = () => {
  return (
    <div className="overflow-hidden bg-primary-yellow py-5">
      <div className="container mx-auto items-center justify-between gap-4 p-4 lg:flex">
        {/* Left section */}
        <div className="mb-4 py-8 text-primary-green lg:mb-0 lg:w-1/2">
          <h1 className="font-marakazi text-6xl font-bold">Little Lemon</h1>
          <h2 className=" font-marakazi text-3xl font-bold">Chicago</h2>
          <p className="my-4 text-xl">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
        </div>

        {/* Right section */}
        <div className="flex justify-center lg:w-1/2 lg:justify-end">
          <figure className="relative w-3/4  lg:w-2/5">
            <img
              src={Food4}
              alt="food"
              className="translate-y-5 transform rounded-lg shadow-lg"
            />
            <img
              src={Food5}
              alt="food"
              className="absolute inset-x-0 top-0 -translate-y-10 translate-x-10 transform rounded-lg shadow-lg"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
