import {createSelector} from "@reduxjs/toolkit";
import {selectCar} from "../car/selectors";

const selectRentalPriceFilter = (state) => state.filter.rentalPrice;
const selectMakeFilter = (state) => state.filter.make;
const selectMileageFilter = (state) => state.filter.mileage;

export const selectFilteredCars = createSelector(
  [selectCar, selectRentalPriceFilter, selectMakeFilter, selectMileageFilter],
  (cars, rentalPrice, make, mileage) => {
    return cars.filter((car) => {
      const rentalPriceCondition = rentalPrice
        ? car.rentalPrice <= rentalPrice.replace("$", "")
        : true;
      const makeCondition = make ? car.make === make : true;
      const mileageCondition = car.mileage >= mileage.min && car.mileage <= mileage.max;
      return rentalPriceCondition && makeCondition && mileageCondition;
    });
  }
);
