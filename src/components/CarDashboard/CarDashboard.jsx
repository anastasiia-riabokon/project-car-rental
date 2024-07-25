import makes from "../../data/makes.json";

const CarDashboard = () => {
  const optionsBrand = makes.map((item) => ({value: item, label: item}));
  return <div></div>;
};
export default CarDashboard;
