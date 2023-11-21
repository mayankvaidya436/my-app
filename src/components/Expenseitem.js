import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './Expenseitem.css';


const ExpenseItem=(props)=>
{  
     const [title,setTitle]=useState(props.title);
     const [amount,setAmount]=useState(props.amount);
     
    const change=()=>{
        setAmount('100');
        console.log(amount);

    }
    const del=()=>{
        setTitle('updated');
         console.log(title);
         
     }
     return ( 
         <div className="expense-item">
           <ExpenseDate date={props.date}/>
        <div  className="expense-item__desc">
        <h2> {title}</h2>
            <h2>{props.location}</h2>
            <div className="expense-item__price">${amount}</div>

           <button onClick={del}>Delete expense</button>
           <button onClick={change}>change expenses</button>
        </div>

    </div>
    )

        
    
}
export default ExpenseItem;