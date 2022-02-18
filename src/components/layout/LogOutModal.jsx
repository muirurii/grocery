import { GlobalContext } from "../store/GlobalState";
import { useContext } from "react";

const LogOutModal = () => {
    const{dispatch} = useContext(GlobalContext);

    const closeModal = ()=>{
        dispatch({
            type:"toggleLogOutModal"
        });
    }
    const logOut = ()=>{
        dispatch({
            type:"changeLogIn"
        });
        dispatch({
            type:"toggleAvatar",
            payload: ' '
        });
        closeModal();
    }
    return (
        <div className="logout-modal">
            <p>Are you sure you want to log out</p>
            <div className="logout-buttons">
                <button className="cancel" onClick={closeModal}>Cancel</button>
                <button className="sure" onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}

export default LogOutModal;
