import {useState} from "react";
import {cityAndCountry} from "../../helpers/address";
import ModalCar from "../ModalCar/ModalCar";

const CarCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
    setModalContent(props);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };
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

      <button type="button" onClick={handleOpenModal}>
        Learn More
      </button>
      <ModalCar isOpen={isOpen} isClose={handleCloseModal} content={modalContent} />
    </>
  );
};
export default CarCard;
