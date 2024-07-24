import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCarsThunk} from "../../redux/car/operations";
import {selectCar} from "../../redux/car/selectors";
import CarCard from "../../components/CarCard/CarCard";

const CatalogPage = () => {
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
export default CatalogPage;
