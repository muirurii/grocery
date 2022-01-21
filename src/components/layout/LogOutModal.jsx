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
        <div  className="log-out-modal">
            <p>Are you sure you want to log out</p>
            <div className="log-out-buttons">
                <button className="cancel" onClick={closeModal}>Cancel</button>
                <button className="sure" onClick={logOut}>Sure</button>
            </div>
        </div>
    )
}

export default LogOutModal;
