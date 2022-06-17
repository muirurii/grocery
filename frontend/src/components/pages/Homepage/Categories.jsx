import Category from "./Category";
import {
  GiBananaBunch,
  GiCabbage,
  GiCoffeeBeans,
  GiMeat,
} from "react-icons/gi";

const Categories = () => {
  return (
    <section>
      <h1>Browse Our Categories</h1>
      <section className="categories">
        <Category text={"vegetables"} icon={<GiCabbage />} />
        <Category text={"fruits"} icon={<GiBananaBunch />} />
        <Category text={"cereals"} icon={<GiCoffeeBeans />} />
        <Category text={"meats"} icon={<GiMeat />} />
      </section>
    </section>
  );
};

export default Categories;
