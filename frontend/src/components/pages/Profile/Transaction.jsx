import { MdDone, MdPending,MdChevronRight } from "react-icons/md";
import { useState } from "react";

const Transaction = ({ transaction }) => {
  const [open,setOpen] = useState(false);

  return (
    <tr>
      <td onClick={()=> setOpen(!open)}>
        Time: {new Date(transaction.createdAt).toLocaleString("en-GB", {
          timeStyle: "short",
          dateStyle: "short",
        })}
        <button className={`${open ? 'collapse' : null}`}><MdChevronRight /></button>
        <span className={`trans-details ${open ? 'collapse' : null}`}>
          Id: {transaction._id} <br/>
          Items: {transaction.products.length}
        </span>
      </td>
      <td>
        {transaction.delivered ? (
          <span className="center done">
            delivered <MdDone />
          </span>
        ) : (
          <span className="center pending">
            pending &nbsp; <MdPending />{" "}
          </span>
        )}
      </td>
      <td>
        {transaction.paid ? (
          <span className="center done">
            {" "}
            Yes <MdDone />{" "}
          </span>
        ) : (
          <span className="center pending">
            No &nbsp; <MdPending />
          </span>
        )}
      </td>
      <td>${transaction.cost}</td>
    </tr>
  );
};

export default Transaction;
