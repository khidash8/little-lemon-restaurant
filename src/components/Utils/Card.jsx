import ReserveButton from "./ReserveButton";

const Card = ({ heading, price, description, img }) => {
  return (
    <div className="flex flex-col rounded border-2 border-primary-green p-2 text-gray-700 shadow-xl">
      <img src={img} alt="food" className="h-[200px] w-full object-cover" />

      <div className="flex-grow">
        <h2 className="mb-2 text-2xl font-bold ">{heading}</h2>
        <p className="mb-2 text-xl font-bold ">${price}</p>
        <p className="mb-4 text-lg text-gray-600">{description}</p>
      </div>
      <ReserveButton
        prop={`order online`}
        link={"/order-online"}
        className={`w-full text-center`}
      />
    </div>
  );
};

export default Card;
