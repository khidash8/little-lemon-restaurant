import Star from "../../assets/star.png";

const TestimonialCard = ({ name, review }) => {
  return (
    <div className="flex flex-col space-y-2  rounded bg-gray-200 p-4 text-gray-600 shadow-xl">
      <img src={Star} alt="logo" className="w-10" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm">{review}</p>
    </div>
  );
};

//? set default values
TestimonialCard.defaultProps = {
  name: "Anonymous",
  review: "No review",
};

export default TestimonialCard;
