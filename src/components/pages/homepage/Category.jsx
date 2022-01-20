import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import {Link} from 'react-router-dom';

const Category = ({text}) => {

    const {dispatch} = useContext(GlobalContext);

    return (
        <Link to="/shop">
        <article onClick={
            ()=>{
                dispatch({
                    type:"filter",
                    payload:text.toLowerCase()
                })
                window.scrollTo(0,0)
            }
        }>
            <h2>{text}</h2>
        </article>
        </Link>
    )
}

export default Category;
