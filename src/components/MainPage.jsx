import { Link } from "react-router-dom";
import blackDress from "../assets/black-dress.jpg";
import Carousel from "./ui/Carousel";

const MainPage = () => {
  const CarouselCredits = () => {
    return (
      <ul>
        <li className="text-center">
          1st Photo by{" "}
          <a
            className="text-green-500"
            href="https://unsplash.com/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Jonathan Borba
          </a>{" "}
          on{" "}
          <a
            className="text-green-500"
            href="https://unsplash.com/photos/woman-in-white-floral-wedding-dress--shn8ecaH2w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </li>
        <li className="text-center">
          2nd Photo by{" "}
          <a
            className="text-green-500"
            href="https://unsplash.com/@photosbychalo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Chalo Garcia
          </a>{" "}
          on{" "}
          <a
            className="text-green-500"
            href="https://unsplash.com/photos/woman-in-blue-sleeveless-dress-alcLDJ6QxD0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </li>
        <li className="text-center">
          3rd Photo by{" "}
          <a
            className="text-green-500"
            href="https://unsplash.com/@honeyyanibel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Honey Yanibel Minaya Cruz
          </a>{" "}
          on{" "}
          <a
            className="text-green-500"
            href="https://unsplash.com/photos/woman-wearing-yellow-off-shoulder-silt-dress-with-silver-tiara-xWEHhKYqdlY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </li>
      </ul>
    );
  };
  return (
    <main className="">
      <section className="relative">
        <img src={blackDress} alt="a woman in a black dress" />
        <h1 className="font-bold centered text-5xl md:text-8xl text-violet-600 whitespace-nowrap">
          dress store
        </h1>
        <p className="text-center">
          Photo by{" "}
          <a
            className="text-blue-700"
            href="https://unsplash.com/@khaledkagii?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Khaled Ghareeb
          </a>{" "}
          on{" "}
          <a
            className="text-blue-700"
            href="https://unsplash.com/photos/woman-in-black-dress-QN507MdnxRQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </p>
      </section>
      <section className="flex flex-col items-center py-12 px-4">
        <h2 className="font-bold text-2xl">This is a heading</h2>
        <p className="py-4">
          This is some random text that I am using to pad the page. Kindly do
          not mind me.
        </p>
        <Link to="/new">
          <button className="btn btn-outline">Book an Appointment</button>
        </Link>
      </section>
      <section className="bg-gray-700 text-gray-50 py-12 flex flex-col items-center">
        <h2 className="font-bold text-2xl text-center">
          Explore Our Collection
        </h2>
        <Carousel />
        <CarouselCredits />
      </section>
    </main>
  );
};

export default MainPage;
