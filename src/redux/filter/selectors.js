import {createSelector} from "@reduxjs/toolkit";
import {selectCar} from "../car/selectors";

const selectRentalPriceFilter = (state) => state.filter.rentalPrice;
const selectMakeFilter = (state) => state.filter.make;
const selectMileageFilter = (state) => state.filter.mileage;

export const selectFilteredCars = createSelector(
  [selectCar, selectRentalPriceFilter, selectMakeFilter, selectMileageFilter],
  (cars, rentalPrice, make, mileage) => {
    const rentalPriceNum = parseFloat(rentalPrice) || 0;

    return cars.filter((car) => {
      const carRentalPriceNum = parseFloat(car.rentalPrice.replace("$", "")) || 0;

      const rentalPriceCondition = rentalPriceNum ? carRentalPriceNum <= rentalPriceNum : true;

      const makeCondition = make ? car.make === make : true;
      const mileageCondition = car.mileage >= mileage.min && car.mileage <= mileage.max;
      return rentalPriceCondition && makeCondition && mileageCondition;
    });
  }
);
