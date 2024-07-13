
// import './App.css';
// // import About from './components/About';
// import Navbar from './components/Navbar';
// import Textform from './components/Textform';
// import Alert from './components/Alert';
// import React, { useState } from 'react'


// function App() {
//   const [mode,setMode]=useState('light')
//   const [alert,setAlert]=useState(null)
//   const showAlert=(type,message)=>{
//     setAlert({
//       type:type,
//       msg:message
//     })
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   }
//   function toggleMode(){
//     if(mode==='light') {
//       setMode('dark')
//       document.body.style.backgroundColor='grey';
//       showAlert("success","dark mode has been enabled")
//     }
//     else {
//       setMode('light')
//       document.body.style.backgroundColor='white'
//       showAlert("success","light mode has been enabled")
//     }
//   }
//   return (
//     <>
//       <Navbar aboutText="aboutUs" title="Aman's TextUtils" mode={mode} togglemode={toggleMode}/>
//       <Alert alert={alert} />
//       <div className="container">
//         <Textform heading="Enter the input text" mode={mode} showAlert={showAlert}/>
//         {/* <About/> */}
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Notes from './components/Notes'
// import ExpenseList from './components/ExpenseList';
// import AddExpenseForm from './components/AddExpenseForm';

const App = () => {
    // const [expenses, setExpenses] = useState([]);

    // const addExpense = (expense) => {
    //     setExpenses([...expenses, expense]);
    // };

    return (
        <div>
            {/* <AddExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} /> */}
            <Notes/>
        </div>
    );
};

export default App;

