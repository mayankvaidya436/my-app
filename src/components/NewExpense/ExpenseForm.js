import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    const [enteredtitle,setenteredtitle]=useState('');
    const [enteredAmount,setenteredAmount]=useState('');
    const [enteredDate,setenteredDate]=useState('');
    const titleChange=(event)=>{
        setenteredtitle(event.target.value);
   
    }
    const amountChange=(event)=>{
  setenteredAmount(event.target.value);
    }
    const dateChange=(event)=>{
    setenteredDate(event.target.value)
    }
    const submitHandler=(event)=>{
     event.preventDefault();
     const expenseData={
        title:enteredtitle,
        amount:enteredAmount,
        date: new Date(enteredDate)
     };
     props.onSaveExpenseData(expenseData);
     setenteredtitle('');
     setenteredAmount('');
     setenteredDate('');
    } 
   
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"  min="0.01" step="0.01" value={enteredAmount} onChange={amountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2021-11-2" max="2024-11-3" value={enteredDate} onChange={dateChange}/>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>

    )

}
 export default ExpenseForm;