import ExpenseDetials from './ExpenseDetials';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';


function ExpenseItem(props)
{   
     return (<div className="expense-item">
           <ExpenseDate date={props.date}/>
        <div  className="expense-item__desc">
           <ExpenseDetials title={props.title} location={props.location}
           amount={props.amount}/>
           
        </div>

    </div>)

        
    
}
export default ExpenseItem;