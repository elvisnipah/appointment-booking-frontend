import weddingDress from "../../assets/wedding-dress.jpg";
import cocktailDress from "../../assets/cocktail-dress.jpg";
import yellowDress from "../../assets/yellow-dress.jpg";

const Image = (props) => {
  return (
    <img
      src={props.src}
      className="rounded-box max-h-[300px] md:max-h-[400px]"
    ></img>
  );
};
const Carousel = () => {
  return (
    <div className="carousel carousel-center p-4 space-x-4 bg-gray-700 rounded-box">
      <div className="carousel-item">
        <Image src={weddingDress} />
      </div>
      <div className="carousel-item">
        <Image src={cocktailDress} />
      </div>
      <div className="carousel-item">
        <Image src={yellowDress} />
      </div>
    </div>
  );
};

export default Carousel;
