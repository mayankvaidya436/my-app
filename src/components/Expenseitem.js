import './Expenseitem.css';

function ExpenseItem(props)
{    
    const expenseDate= new Date(2023,10,18);
    const expenseTitle='car insurance';
    const expensePrice=294.34;
    const LocationOfExpenditure='pune';
    return (<div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div  className="expense-item__desc">
            <h2> {props.title}</h2>
            <h2>{props.location}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>

    </div>)

        
    
}
export default ExpenseItem;