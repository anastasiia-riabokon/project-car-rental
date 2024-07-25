const CarCard = (props) => {
  const {photoLink, address, type, rentalPrice, year, id, model, make} = props;
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
        <p>{address}</p>
        <p>{type}</p>
        <p>{year}</p>
        <p>{id}</p>
        <p>{model}</p>
        <p>{make}</p>
      </span>
    </>
  );
};
export default CarCard;
