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
import CustomDropdownIndicator from "../CustomDropdownIndicator/CustomDropdownIndicator";
import StyledSelect from "./StyledSelect";
import {useState} from "react";
import {formattedNumber} from "../../helpers/formattedNumber";

const CarDashboard = () => {
  const {control, handleSubmit, setValue} = useForm({
    defaultValues: {
      make: "",
      rentalPrice: "",
      minMileage: "",
      maxMileage: "",
    },
  });

  const dispatch = useDispatch();
  const [selectedPrice, setSelectedPrice] = useState("");

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
    const value = selected[0]?.value || "";
    setSelectedPrice(value);
    setValue("rentalPrice", value);
  };

  const onSubmit = (data) => {
    dispatch(clearItems());
    const minMileageValue = data.minMileage !== "" ? +data.minMileage.replaceAll(",", "") : 0;
    const maxMileageValue = data.maxMileage !== "" ? +data.maxMileage.replaceAll(",", "") : 100000;

    dispatch(changeMakeFilter(data.make));
    dispatch(changeRentalPriceFilter(data.rentalPrice.toString()));
    dispatch(changeMileageFilter({min: minMileageValue, max: maxMileageValue}));
    dispatch(fetchCarsThunk({}));
  };

  const handleChange = (name, value) => {
    setValue(name, formattedNumber(value));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-[18px] justify-center items-end"
    >
      <label>
        <p className="label-custom">Car brand</p>
        <Controller
          name="make"
          control={control}
          render={({field}) => (
            <StyledSelect
              {...field}
              options={optionsMake}
              placeholder="Enter the text"
              onChange={changeMake}
              className="select-custom select-custom-make"
              dropdownHandleRenderer={() => <CustomDropdownIndicator />}
              style={{width: "224px"}}
            />
          )}
        />
      </label>
      <label>
        <p className="label-custom">Price/ 1 hour</p>
        <span className="relative">
          <Controller
            name="rentalPrice"
            control={control}
            render={({field}) => (
              <StyledSelect
                {...field}
                options={optionsRentalPrice}
                placeholder="To $"
                onChange={changeRentalPrice}
                className="select-custom select-custom-price"
                dropdownHandleRenderer={() => <CustomDropdownIndicator />}
                style={{width: "125px"}}
              />
            )}
          />
          <p className="absolute inset-0 flex items-center pointer-events-none text-[18px] font-medium bg-[#F7F7FB] pl-[18px] z-20 border-none rounded-[14px] w-[90px]">
            To {selectedPrice}$
          </p>
        </span>
      </label>
      <span>
        <p className="label-custom">Car mileage / km</p>

        <span className="flex">
          <label className="relative">
            <Controller
              name="minMileage"
              control={control}
              render={({field}) => (
                <input
                  {...field}
                  type="text"
                  className="input-custom rounded-s-[14px] pl-[75px] border-r border-[rgba(138,138,137,0.2)]"
                  onChange={(e) => handleChange("minMileage", e.target.value)}
                  value={field.value}
                />
              )}
            />
            <p className="input-text">From</p>
          </label>
          <label className="relative">
            <Controller
              name="maxMileage"
              control={control}
              render={({field}) => (
                <input
                  {...field}
                  type="text"
                  className="input-custom rounded-e-[14px] pl-[52px]"
                  onChange={(e) => handleChange("maxMileage", e.target.value)}
                  value={field.value}
                />
              )}
            />
            <p className="input-text">To</p>
          </label>
        </span>
      </span>
      <button type="submit" className="btn-custom p-[14px] w-[144px]">
        Search
      </button>
    </form>
  );
};

export default CarDashboard;
