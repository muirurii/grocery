import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { toogleModal } from "../../store/actions/menuActions";
import { resetUser } from "../../store/actions/userActions";

const LogOutModal = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = bindActionCreators(toogleModal, dispatch);
  const reset = bindActionCreators(resetUser, dispatch);

  const logOut = () => {
    closeModal();
    reset();
    navigate("/");
  };
  return (
    <div className="logout-modal center">
      <p>Logged in as {name}</p>
      <div className="logout-buttons">
        <button className="cancel" onClick={closeModal}>
          Close
        </button>
        <button className="sure" onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
