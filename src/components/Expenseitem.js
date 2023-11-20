import ExpenseDetials from './ExpenseDetials';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';


const ExpenseItem=(props)=>
{   
     const del=()=>{
         console.log("delete");
     }
     return (<div className="expense-item">
           <ExpenseDate date={props.date}/>
        <div  className="expense-item__desc">
           <ExpenseDetials title={props.title} location={props.location}
           amount={props.amount}/>
           <button onClick={del}>Delete expense</button>
        </div>

    </div>)

        
    
}
export default ExpenseItem;