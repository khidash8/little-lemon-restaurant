import HeroImage from "../../assets/food/food5.jpeg";
import ReserveButton from "../Utils/ReserveButton";
export default function Confirmation() {
  return (
    <header className="container mx-auto flex flex-col items-center justify-between p-4">
      <img
        className="object-cover lg:h-[500px] "
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="mb-2 mt-4 text-start text-lg text-gray-600">
        <h1 className="text-xl font-bold">Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      <section className="mt-2 space-x-4">
        <ReserveButton prop="Order Online" link="/order-online" />
        <ReserveButton prop="Home Page" link="/" />
      </section>
    </header>
  );
}
