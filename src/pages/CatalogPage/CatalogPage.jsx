import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectFilteredCars} from "../../redux/filter/selectors";
import {selectIsMore} from "../../redux/car/selectors";
import {fetchCarsThunk} from "../../redux/car/operations";

import CarDashboard from "../../components/CarDashboard/CarDashboard";
import CarList from "../../components/CarList/CarList";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import {clearItems} from "../../redux/car/slice";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const showLoadMore = useSelector(selectIsMore);
  const filteredCars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk({page: page}));

    return () => {
      dispatch(clearItems());
    };
  }, [dispatch, page]);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <CarDashboard />
      <CarList filteredCars={filteredCars} />
      {showLoadMore && <BtnLoadMore onClick={handleClick} />}
    </div>
  );
};
export default CatalogPage;
