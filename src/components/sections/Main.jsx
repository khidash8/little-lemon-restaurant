import ReserveButton from "../Utils/ReserveButton";
import Card from "../Utils/Card";
import Bruschetta from "../../assets/food/bruschetta.jpeg";
import GreekSalad from "../../assets/food/greek-salad.webp";
import LemonDesert from "../../assets/food/lemon-dessert.webp";
import TestimonialCard from "../Utils/TestimonialCard";

const Main = () => {
  return (
    <main className="mb-10 ">
      {/* Special Menu Section */}
      <div className="container mx-auto space-y-10 p-4">
        {/* Top */}
        <div>
          <h2 className="mb-5 mt-10 font-body text-4xl font-bold text-gray-700">
            This weeks specials
          </h2>
          <ReserveButton prop={"Online Menu"} link={"/menu"} />
        </div>

        {/* bottom */}
        <div className="block gap-5 space-y-5 md:grid md:grid-cols-2 md:space-y-0 lg:grid-cols-3 lg:space-y-0">
          <Card
            img={GreekSalad}
            heading={`Greek Salad`}
            price={`12.99`}
            description={`Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.`}
          />
          <Card
            img={Bruschetta}
            heading={`Bruschetta`}
            price={`16.99`}
            description={`Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.`}
          />
          <Card
            img={LemonDesert}
            heading={`Lemon Dessert`}
            price={`19.99`}
            description={`Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.`}
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto space-y-10 p-4">
        <h2 className="mb-5 mt-5 text-center font-body text-4xl font-bold text-gray-700">
          Testimonials
        </h2>

        {/* Bottom cards*/}
        <div className="block gap-5 space-y-5 md:grid md:grid-cols-3 md:space-y-0 lg:grid-cols-4 lg:space-y-0">
          <TestimonialCard
            name={"Paulose"}
            review={"This is the best Mediterranean food that I've ever had!"}
          />
          <TestimonialCard
            name={"John Doe"}
            review={
              "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."
            }
          />
          <TestimonialCard
            name={"Alan Chen"}
            review={
              "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
            }
          />
          <TestimonialCard
            name={"Jane Doe"}
            review={
              "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
            }
          />
          <TestimonialCard
            name={"Albert"}
            review={
              "The food here really refreshed me after a late night shift at the local supply depot."
            }
          />
          <TestimonialCard
            name={"Paulose"}
            review={
              "I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here."
            }
          />
          <TestimonialCard
            name={"Khidash Muhammed"}
            review={
              "The food here was fire!! Everyone should try this place out at least once if they live in Chicago."
            }
          />
          <TestimonialCard
            name={"Linsha Najeeb"}
            review={
              "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!"
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
