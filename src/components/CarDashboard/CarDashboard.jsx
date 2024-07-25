import Select from "react-dropdown-select";
import makes from "../../data/makes.json";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {changeMakeFilter, changeRentalPriceFilter} from "../../redux/filter/slice";
import {selectCar} from "../../redux/car/selectors";
import {useEffect, useState} from "react";
import {fetchCarsThunk} from "../../redux/car/operations";

const CarDashboard = () => {
  const cars = useSelector(selectCar);

  const {control, handleSubmit, setValue} = useForm({
    defaultValues: {
      make: "",
      rentalPrice: "",
    },
  });

  const dispatch = useDispatch();

  const optionsMake = makes.map((item) => ({value: item, label: item}));

  const prices = [];
  for (let price = 20; price <= 300; price += 5) {
    prices.push(price);
  }

  const optionsRentalPrice = prices.map((item) => ({label: item, value: item}));

  const changeMake = (selected) => {
    setValue("make", selected[0]?.value || "");
  };

  const changeRentalPrice = (selected) => {
    setValue("rentalPrice", selected[0]?.value || "");
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(changeMakeFilter(data.make));
    dispatch(changeRentalPriceFilter(data.rentalPrice.toString()));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="make"
        control={control}
        render={({field}) => (
          <Select
            {...field}
            options={optionsMake}
            placeholder="Enter the text"
            onChange={changeMake}
          />
        )}
      />
      <Controller
        name="rentalPrice"
        control={control}
        render={({field}) => (
          <Select
            {...field}
            options={optionsRentalPrice}
            placeholder="To $"
            onChange={changeRentalPrice}
          />
        )}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default CarDashboard;
