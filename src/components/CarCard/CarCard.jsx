import {cityAndCountry} from "../../helpers/address";
import IconHeart from "../IconHeart/IconHeart";

const CarCard = (props) => {
  const {photoLink, address, type, rentalPrice, year, id, model, make, rentalCompany} = props;
  const place = cityAndCountry(address);
  return (
    <>
      <button type="button">
        <IconHeart />
      </button>
      <img src={photoLink} alt={`${make} ${model}`} width={274} />
      <span>
        <p>
          {make} {model}, {year}
        </p>
        <p>{rentalPrice}</p>
      </span>
      <span>
        <p>
          {place.city} | {place.country} | {rentalCompany}
        </p>
        <p>
          {type} | {id} | {model}
        </p>
      </span>

      <button type="button">Learn More</button>
    </>
  );
};
export default CarCard;
