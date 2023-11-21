import React from "react";
import './ExpenseForm.css';

const ExpenseForm=()=>{
    const titleChange=(event)=>{
   console.log(event.target.value);
    }
   
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"  min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2021-11-2" max="2024-11-3"/>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>

    )

}
 export default ExpenseForm;