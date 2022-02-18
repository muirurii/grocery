import {Link} from 'react-router-dom';

const Category = ({text}) => {
    return (
        <Link to={`/shop/${text.toLowerCase()}`}>
        <article>
            <h2>{text} <i className="fas fa-arrow-right"></i></h2>
        </article>
        </Link>
    )
}

export default Category;
