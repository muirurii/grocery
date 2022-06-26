import Transaction from "./Transaction";
import useScrollToTop from "../../../customHooks/useScroll";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTransactions } from "../../../store/actions/transactionActions";

const Profile = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  console.log(loading);
  const dispatch = useDispatch();
  const setTr = bindActionCreators(fetchTransactions, dispatch);
  const { transactions, spent, delivered, pending } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    if (!user.token.length) {
      return navigate("/login");
  }
    const getData = async ()=>{
      await setTr(user.token);      
    }
      getData();
      
  }, [user.token]);

  return (
    <main className="profile">
      <div>
        <h2>Profile</h2>
        <h3>username - {user.name}</h3>
        <h3>email - {user.email}</h3>
        <h3>expenditure - ${spent}</h3>
        <h3>
          {delivered} delivered {pending} pending
        </h3>
      </div>
      <div>
        <h2>Transactions</h2>
        {!transactions.length ? (
          "no transactions"
        ) : (
          <table>
            <thead>
              <tr>
                <th>Details</th>
                <th>Delivery</th>
                <th>Paid</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <Transaction key={transaction._id} transaction={transaction} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
};

export default Profile;
