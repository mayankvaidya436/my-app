import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/expenses';
import ExpenseItem from './components/Expenseitem';


const App=()=>{ 
  const expenses=[
    {
      id:'e1',
      title :'Toilet paper',
      amount:'235',
      date: new Date(2023,11,3),
      location:'pune',

    },
    {
      id:'e2',
      title :'car insurance',
      amount:'215',
      date: new Date(2023,10,13),
      location:"sendhwa",

    },
    {
      id:'e3',
      title :' new desk',
      amount:'123',
      date: new Date(2023,1,31),
      location:'delhi',

    },
    {
      id:'e4',
      title :'rooms',
      amount:'2354',
      date: new Date(2023,5,6),
      location:'chennai',

    },
  ]
  const addExpenseHandler=(expense)=>{
   console.log("i app.js");
   console.log(expense);
   
  }

   
  return (
    <div className="App">
      
      <header className="App-header">
         
      <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses items={expenses}/>        
        
      </header>
    </div>
  );
}

export default App;
