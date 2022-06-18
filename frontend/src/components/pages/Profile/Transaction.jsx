import { MdDone, MdPending} from 'react-icons/md'

const Transaction = ({transaction}) => {
  return (
    <tr>
        <td>{new Date(transaction.createdAt).toLocaleString('en-GB',{timeStyle:"short",dateStyle:"short"})}</td>
        <td>{transaction.delivered ? 
        <span className="center done">delivered <MdDone /></span> :
        <span className="center pending">pending &nbsp; <MdPending /> </span>
        }</td>
        <td>{transaction.paid ? 
        <span className='center done'> Yes <MdDone /> </span> :
         <span className="center pending">No &nbsp; <MdPending /></span>}</td>
        <td>${transaction.cost}</td>
    </tr>
  )
}

export default Transaction