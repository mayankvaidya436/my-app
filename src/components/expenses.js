import Card from "./Card";
import ExpenseItem from "./Expenseitem";

function Expenses(props){
    return (
        <div>
            <Card className='expenses'>
             <ExpenseItem title={props.items[0].title}
         amount={props.items[0].amount} 
         date={props.items[0].date} 
         location={props.items[0].location} ></ExpenseItem>
         <ExpenseItem title={props.items[1].title}
         amount={props.items[1].amount} 
         date={props.items[1].date} 
         location={props.items[1].location} ></ExpenseItem>
         <ExpenseItem title={props.items[2].title}
         amount={props.items[2].amount} 
         date={props.items[2].date} 
         location={props.items[2].location} ></ExpenseItem>
         <ExpenseItem title={props.items[3].title}
         amount={props.items[3].amount} 
         date={props.items[3].date} 
         location={props.items[3].location} ></ExpenseItem>
        
         </Card>
        </div>
    )

}
export default Expenses;