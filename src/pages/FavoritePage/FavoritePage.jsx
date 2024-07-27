import {useSelector} from "react-redux";
import {selectItemsFavorite} from "../../redux/favorite/selectors";
import CarCard from "../../components/CarCard/CarCard";

const FavoritePage = () => {
  const favCar = useSelector(selectItemsFavorite);
  return (
    <div>
      <ul className="flex gap-y-[50px] gap-x-[29px] flex-wrap justify-center">
        {favCar.map((item) => (
          <li key={item.idFav}>
            <CarCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FavoritePage;
