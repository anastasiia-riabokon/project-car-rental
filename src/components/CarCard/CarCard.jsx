import {useState} from "react";
import {cityAndCountry} from "../../helpers/address";
import ModalCar from "../ModalCar/ModalCar";
import {cutText} from "../../helpers/cutText";

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
    <div>
      <div className="w-[274px] h-[268px] mb-[14px]">
        <img
          src={photoLink}
          alt={`${make} ${model}`}
          className="w-full h-full object-cover rounded-[14px]"
        />
      </div>
      <span className="font-medium flex justify-between mb-2">
        <p>
          {cutText(make, 8)} <span className="accent">{cutText(model)}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </span>
      <div className="text-[14px] text-[rgba(18,20,23,0.50)] mb-[28px]">
        <ul className="list mb-1">
          <li className="item">{place.city}</li>
          <li className="item">{place.country}</li>
          <li className="item">{rentalCompany}</li>
        </ul>
        <ul className="list">
          <li className="item">{type}</li>
          <li className="item">{id}</li>
          <li className="item">{model}</li>
        </ul>
      </div>

      <button type="button" onClick={handleOpenModal} className="btnCustom w-full py-3">
        Learn More
      </button>
      <ModalCar isOpen={isOpen} isClose={handleCloseModal} content={modalContent} />
    </div>
  );
};
export default CarCard;
