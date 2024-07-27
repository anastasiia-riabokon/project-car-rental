import {selectItemsFavorite} from "../../redux/favorite/selectors";
import {addCar, removeCar} from "../../redux/favorite/slice";
import {useDispatch, useSelector} from "react-redux";

import CarCard from "../CarCard/CarCard";
import IconHeart from "../IconHeart/IconHeart";

const CarList = ({filteredCars}) => {
  const dispatch = useDispatch();
  const favCar = useSelector(selectItemsFavorite);

  const handleAddOrRemoveToFavorites = (car) => {
    const alreadyFavorite = favCar.some((item) => item.id === car.id);
    if (alreadyFavorite) {
      const favItem = favCar.find((item) => item.id === car.id);
      dispatch(removeCar(favItem.idFav));
    } else {
      dispatch(addCar(car));
    }
  };
  return (
    <div className="pt-[50px] pb-[100px]">
      <ul className="flex gap-y-[50px] gap-x-[29px] flex-wrap justify-center">
        {filteredCars.map((item) => (
          <li key={item.id} className="relative">
            <button
              type="button"
              onClick={() => handleAddOrRemoveToFavorites(item)}
              className="absolute top-[14px] right-[14px]"
            >
              <IconHeart
                fill={favCar.some((fav) => fav.id === item.id) ? "blue" : "none"}
                stroke={favCar.some((fav) => fav.id === item.id) ? "blue" : "white"}
              />
            </button>
            <CarCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CarList;
