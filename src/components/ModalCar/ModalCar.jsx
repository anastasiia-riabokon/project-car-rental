import Modal from "react-modal";
import {IoCloseOutline} from "react-icons/io5";

import {cityAndCountry} from "../../helpers/address";
import {formattedNumber} from "../../helpers/formattedNumber";

import css from "./ModalCar.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "541px",
    height: "90%",
    padding: "0",
    borderRadius: "24px",
  },
  overlay: {
    backgroundColor: "rgba(18,20,23,0.50)",
    zIndex: 10,
  },
};

Modal.setAppElement("#root");

const ModalCar = ({isOpen, isClose, content}) => {
  if (!content) return;
  const {
    photoLink,
    address,
    type,
    rentalPrice,
    year,
    id,
    model,
    make,
    accessories,
    fuelConsumption,
    functionalities,
    engineSize,
    description,
    rentalConditions,
    mileage,
  } = content;

  const place = cityAndCountry(address);
  const condition = rentalConditions.split("\n");
  const age = condition[0].slice(-2);
  condition.shift();
  return (
    <Modal isOpen={isOpen} onRequestClose={isClose} style={customStyles}>
      <div className="relative p-10 ">
        <button onClick={isClose} className="absolute top-4 right-4">
          <IoCloseOutline size={24} color="#121417" />
        </button>
        <div className="w-[460px] h-[248px] mb-[14px]">
          <img
            src={photoLink}
            alt={`${make} ${model}`}
            className="w-full h-full object-cover rounded-[14px]"
          />
        </div>
        <p className="font-medium mb-2 text-[18px]">
          {make} <span className="accent">{model}</span>, {year}
        </p>
        <div className={`${css.subtext} mb-[14px]`}>
          <ul className="list mb-1">
            <li className="item">{place.city}</li>
            <li className="item">{place.country}</li>
            <li className="item">{id}</li>
            <li className="item">{year}</li>
            <li className="item">{type}</li>
          </ul>
          <ul className="list">
            <li className="item">Fuel Consumption: {fuelConsumption}</li>
            <li className="item">Engine Size: {engineSize}</li>
          </ul>
        </div>

        <p className="mb-[24px] leading-5 text-[14px]">{description}</p>

        <div className="mb-[24px]">
          <h2 className={css.caption}>Accessories and functionalities:</h2>

          <div className={css.subtext}>
            <ul className="list">
              {accessories.map((item, i) => (
                <li key={`accessories-${i}`} className="item">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="list">
              {functionalities.map((item, i) => (
                <li key={`functionalities-${i}`} className="item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h2 className={css.caption}>Rental Conditions:</h2>
          <ul className="flex flex-wrap gap-2">
            <li className={css.itemCondition}>
              Minimum age: <span className="accent font-semibold">{age}</span>
            </li>
            {condition.map((item, i) => (
              <li key={`condition-${i}`} className={css.itemCondition}>
                {item}
              </li>
            ))}
            <li className={css.itemCondition}>
              Mileage: <span className="accent font-semibold">{formattedNumber(mileage)}</span>
            </li>
            <li className={css.itemCondition}>
              Price: <span className="accent font-semibold">{rentalPrice}</span>
            </li>
          </ul>
        </div>
        <a href="tel:+380730000000" className="btnCustom w-full py-3 grid place-items-center">
          Rental car
        </a>
      </div>
    </Modal>
  );
};
export default ModalCar;
