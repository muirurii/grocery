import Category from "./Category";

const Categories = () => {
    return (
        <section>
            <h1>Browse Our Categories</h1>
            <section className="categories">
                <Category text={"Vegetables"}/>
                <Category text={"Fruits"}/>
                <Category text={"Cereals"}/>
                <Category text={"Meats"}/>
            </section>
        </section>
    )
}

export default Categories;
