import Select from "react-dropdown-select";
import makes from "../../data/makes.json";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {changeMakeFilter} from "../../redux/filter/slice";

const CarDashboard = () => {
  const {control, handleSubmit, setValue} = useForm({
    defaultValues: {
      make: "",
    },
  });

  const dispatch = useDispatch();

  const optionsMake = makes.map((item) => ({value: item, label: item}));

  const changeMake = (selected) => {
    setValue("make", selected[0]?.value || "");
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(changeMakeFilter(data.make));
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
      <button type="submit">Search</button>
    </form>
  );
};
export default CarDashboard;
