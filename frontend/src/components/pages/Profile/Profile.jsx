import Transaction from "./Transaction";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../store/GlobalState";
import fetchData from "../../../customHooks/fetchData";
import Loader from "../../layout/Loader";

const Profile = () => {
  const { user } = useContext(GlobalContext);
  const [transactions, setTransactions] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getTransactions = async () => {
      const res = await fetchData("/transactions/", user.token);
      if (!res.error) {
        setTransactions(res.data);
      }
      setLoading(false);
    };
   
    getTransactions();
  }, [user.token]);
  const totalSpent = transactions.reduce((a ,b)=>{
      return a + b.cost
  },0)

  return (
    <main className="profile">
      <div>
        <h2>Profile</h2>
        <h3>username - {user.name}</h3>
        <h3>email - {user.email}</h3>
        <h3>expenditure - ${totalSpent}</h3>
      </div>
      <div>
        <h2>Transactions</h2>
        {
          !transactions.length ? 'no transactions' :
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Delivery status</th>
              <th>Paid</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {loading ? <Loader /> : transactions.map((t) => (
                  <Transaction key={t._id} transaction={t} />
                )) 
            }
          </tbody>
        </table>
        }
      </div>
    </main>
  );
};

export default Profile;
