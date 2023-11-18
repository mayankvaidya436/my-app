import './Expenseitem.css';

function ExpenseItem()
{    
    const expenseDate= new Date(2023,10,18);
    const expenseTitle='car insurance';
    const expensePrice=294.34;
    const LocationOfExpenditure='pune';
    return (<div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div  className="expense-item__desc">
            <h2> {expenseTitle}</h2>
            <h2>{LocationOfExpenditure}</h2>
            <div className="expense-item__price">${expensePrice}</div>
        </div>

    </div>)

        
    
}
export default ExpenseItem;