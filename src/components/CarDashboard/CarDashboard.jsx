import Select from "react-dropdown-select";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useState} from "react";

import {
  changeMakeFilter,
  changeMileageFilter,
  changeRentalPriceFilter,
  resetFilter,
} from "../../redux/filter/slice";
import {clearItems} from "../../redux/car/slice";
import {fetchCarsThunk} from "../../redux/car/operations";

import {formattedNumber} from "../../helpers/formattedNumber";

import makes from "../../data/makes.json";
import CustomDropdownIndicator from "../CustomDropdownIndicator/CustomDropdownIndicator";
import StyledSelect from "./StyledSelect";

import css from "./CarDashboard.module.css";

const CarDashboard = () => {
  const {control, handleSubmit, setValue, reset} = useForm({
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
    reset();
    setSelectedPrice("");
  };

  const drop = () => {
    reset();

    setSelectedPrice("");
    dispatch(resetFilter());
  };

  const handleChange = (name, value) => {
    setValue(name, formattedNumber(value));
  };

  return (
    <div>
      <button type="button" onClick={drop}>
        reset
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap gap-[18px] justify-center items-end"
      >
        <label>
          <p className={css.labelCustom}>Car brand</p>
          <Controller
            name="make"
            control={control}
            render={({field}) => (
              <StyledSelect
                {...field}
                options={optionsMake}
                placeholder="Enter the text"
                onChange={changeMake}
                clearable
                className={css.selectCustom}
                dropdownHandleRenderer={() => <CustomDropdownIndicator />}
                style={{width: "224px"}}
                dropdownHeight="272px"
              />
            )}
          />
        </label>
        <label>
          <p className={css.labelCustom}>Price/ 1 hour</p>
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
                  className={css.selectCustom}
                  dropdownHandleRenderer={() => <CustomDropdownIndicator />}
                  style={{width: "125px"}}
                  dropdownHeight="188px"
                />
              )}
            />
            <p className="absolute inset-0 flex items-center pointer-events-none text-[18px] font-medium bg-[#F7F7FB] pl-[18px] z-20 border-none rounded-[14px] w-[90px]">
              To {selectedPrice}$
            </p>
          </span>
        </label>
        <span>
          <p className={css.labelCustom}>Car mileage / km</p>
          <span className="flex">
            <label className="relative">
              <Controller
                name="minMileage"
                control={control}
                render={({field}) => (
                  <input
                    {...field}
                    type="text"
                    className={`${css.inputCustom}  rounded-s-[14px] pl-[75px] border-r border-[rgba(138,138,137,0.2)]`}
                    onChange={(e) => handleChange("minMileage", e.target.value)}
                    value={field.value}
                  />
                )}
              />
              <p className={css.inputText}>From</p>
            </label>
            <label className="relative">
              <Controller
                name="maxMileage"
                control={control}
                render={({field}) => (
                  <input
                    {...field}
                    type="text"
                    className={`${css.inputCustom} rounded-e-[14px] pl-[52px]`}
                    onChange={(e) => handleChange("maxMileage", e.target.value)}
                    value={field.value}
                  />
                )}
              />
              <p className={css.inputText}>To</p>
            </label>
          </span>
        </span>
        <button type="submit" className="btnCustom p-[14px] w-[144px]">
          Search
        </button>
      </form>
    </div>
  );
};

export default CarDashboard;
