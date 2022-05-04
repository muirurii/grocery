import { GlobalContext } from "../store/GlobalState";
import { useContext } from "react";

const LogOutModal = ({name}) => {
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
        <div className="logout-modal center">
            <p>Logged in as {name}</p>
            <div className="logout-buttons">
                <button className="cancel" onClick={closeModal}>Close</button>
                <button className="sure" onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}

export default LogOutModal;
