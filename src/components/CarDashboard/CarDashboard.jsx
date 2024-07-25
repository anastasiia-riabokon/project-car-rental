import Select from "react-dropdown-select";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {
  changeMakeFilter,
  changeMileageFilter,
  changeRentalPriceFilter,
} from "../../redux/filter/slice";

import makes from "../../data/makes.json";
import {fetchCarsThunk} from "../../redux/car/operations";
import {clearItems} from "../../redux/car/slice";

const CarDashboard = () => {
  const {control, handleSubmit, setValue} = useForm({
    defaultValues: {
      make: "",
      rentalPrice: "",
      minMileage: undefined,
      maxMileage: undefined,
    },
  });

  const dispatch = useDispatch();

  const optionsMake = makes.map((item) => ({value: item, label: item}));

  const prices = [];
  for (let price = 20; price <= 300; price += 10) {
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
    dispatch(clearItems());
    const minMileageValue = data.minMileage !== undefined ? data.minMileage : 0;
    const maxMileageValue = data.maxMileage !== undefined ? data.maxMileage : 100000;

    dispatch(changeMakeFilter(data.make));
    dispatch(changeRentalPriceFilter(data.rentalPrice.toString()));
    dispatch(changeMileageFilter({min: +minMileageValue, max: +maxMileageValue}));
    dispatch(fetchCarsThunk({}));
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
      <Controller
        name="minMileage"
        control={control}
        render={({field}) => <input {...field} type="number" />}
      />
      <Controller
        name="maxMileage"
        control={control}
        render={({field}) => <input {...field} type="number" />}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default CarDashboard;
