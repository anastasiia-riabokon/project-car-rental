import Modal from "react-modal";
import {IoCloseOutline} from "react-icons/io5";
import {cityAndCountry} from "../../helpers/address";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
      <button onClick={isClose}>
        <IoCloseOutline size={24} color="#121417" />
      </button>
      <img src={photoLink} alt={`${make} ${model}`} width={461} />

      <p>
        {make} <span>{model}</span>, {year}
      </p>
      <div>
        <p>
          {place.city} | {place.country} | id: {id} | year: {year} | type: {type}
        </p>
        <p>
          Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </p>
      </div>

      <p>{description}</p>

      <div>
        <h2>Accessories and functionalities:</h2>

        <ul>
          {accessories.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <ul>
          {functionalities.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Rental Conditions:</h2>

        <ul>
          <li>
            Minimum age: <span>{age}</span>
          </li>

          {condition.map((item) => (
            <li>{item}</li>
          ))}

          <li>
            Mileage: <span>{mileage}</span>
          </li>
          <li>
            Price: <span>{rentalPrice}</span>
          </li>
        </ul>
      </div>
      <a href="tel:+380730000000">+380730000000</a>
    </Modal>
  );
};
export default ModalCar;
