import logo from './logo.svg';
import './App.css';
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

    }

  ]
  return (
    <div className="App">
      <header className="App-header">
         
        <p>
          mayank and react demo
        </p>
        <ExpenseItem title={expenses[0].title}
         amount={expenses[0].amount} 
         date={expenses[0].date} 
         location={expenses[0].location} ></ExpenseItem>
        <ExpenseItem  title={expenses[1].title}
         amount={expenses[1].amount} 
         date={expenses[1].date} 
         location={expenses[1].location}></ExpenseItem>
        <ExpenseItem  title={expenses[2].title}
         amount={expenses[2].amount} 
         date={expenses[2].date} 
         location={expenses[2].location}></ExpenseItem>
        <ExpenseItem  title={expenses[3].title}
         amount={expenses[3].amount} 
         date={expenses[3].date} 
         location={expenses[3].location}></ExpenseItem>
        
        
      </header>
    </div>
  );
}

export default App;
