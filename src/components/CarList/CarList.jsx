import {useDispatch, useSelector} from "react-redux";
import {selectCar} from "../../redux/car/selectors";
import {useEffect, useState} from "react";
import {fetchCarsThunk} from "../../redux/car/operations";
import CarCard from "../CarCard/CarCard";

const CarList = () => {
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk({page: page}));
  }, [dispatch, page]);
  return (
    <div>
      <ul>
        {cars.map((item) => (
          <li key={item.id}>
            <CarCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CarList;
