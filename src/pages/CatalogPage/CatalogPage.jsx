import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectFilteredCars} from "../../redux/filter/selectors";
import {selectErrorMessage, selectIsLoading, selectIsMore} from "../../redux/car/selectors";
import {fetchCarsThunk} from "../../redux/car/operations";
import {clearItems} from "../../redux/car/slice";

import CarDashboard from "../../components/CarDashboard/CarDashboard";
import CarList from "../../components/CarList/CarList";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import Notification from "../../components/Notification/Notification";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const showLoadMore = useSelector(selectIsMore);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk({page: page}));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(clearItems());
    };
  }, [dispatch]);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <Section>
        <Container>
          <>
            <CarDashboard />
            {filteredCars.length === 0 && !isLoading && (
              <Notification text="Sorry! Result not found..." />
            )}
            <CarList filteredCars={filteredCars} />
            {!isLoading && !isError && showLoadMore && <BtnLoadMore onClick={handleClick} />}
          </>
        </Container>
      </Section>
    </div>
  );
};
export default CatalogPage;
