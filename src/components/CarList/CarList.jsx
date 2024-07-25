import CarCard from "../CarCard/CarCard";

const CarList = ({filteredCars}) => {
  return (
    <div>
      <ul>
        {filteredCars.map((item) => (
          <li key={item.id}>
            <CarCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CarList;
