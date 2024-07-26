import {cityAndCountry} from "../../helpers/address";

const CarCard = (props) => {
  const {photoLink, address, type, rentalPrice, year, id, model, make, rentalCompany} = props;

  const place = cityAndCountry(address);

  return (
    <>
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
