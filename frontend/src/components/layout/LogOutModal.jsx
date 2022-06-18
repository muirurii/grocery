import { GlobalContext } from "../store/GlobalState";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';

const LogOutModal = ({name}) => {
    const{dispatch} = useContext(GlobalContext);
    const navigate = useNavigate();
    const closeModal = ()=>{
        dispatch({
            type:"toggleLogOutModal"
        });
    }
    const logOut = ()=>{
        navigate('/')
        dispatch({
            type:"changeLogIn",
            payload: {
                token: '',
                name: undefined
        }
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
