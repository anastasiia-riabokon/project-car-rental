import {Watch} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Watch color="#3470FF" />
    </div>
  );
};
export default Loader;
