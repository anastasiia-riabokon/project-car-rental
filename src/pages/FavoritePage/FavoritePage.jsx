import {useSelector} from "react-redux";
import {selectItemsFavorite} from "../../redux/favorite/selectors";
import CarCard from "../../components/CarCard/CarCard";

const FavoritePage = () => {
  const favCar = useSelector(selectItemsFavorite);
  console.log(favCar);
  return (
    <div>
      <ul>
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
