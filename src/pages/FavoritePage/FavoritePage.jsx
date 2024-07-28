import {useSelector} from "react-redux";
import {selectItemsFavorite} from "../../redux/favorite/selectors";
import CarCard from "../../components/CarCard/CarCard";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

const FavoritePage = () => {
  const favCar = useSelector(selectItemsFavorite);
  return (
    <Section>
      <Container>
        <ul className="flex gap-y-[50px] gap-x-[29px] flex-wrap justify-center">
          {favCar.map((item) => (
            <li key={item.idFav}>
              <CarCard {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
export default FavoritePage;
