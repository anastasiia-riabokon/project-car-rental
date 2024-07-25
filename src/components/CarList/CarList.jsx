import {useDispatch, useSelector} from "react-redux";
import {selectCar} from "../../redux/car/selectors";
import {useEffect, useState} from "react";
import {fetchCarsThunk} from "../../redux/car/operations";
import CarCard from "../CarCard/CarCard";
import {selectFilteredCars} from "../../redux/filter/selectors";

const CarList = () => {
  const [page, setPage] = useState(1);
  const filteredCars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk({page: page}));
  }, [dispatch, page]);
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
