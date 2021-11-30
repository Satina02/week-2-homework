import React from 'react';
import Counter from './components/Counter';
import Receipts from './components/Receipts';
import Ingredients from './Ingredients';

const App = () => {
  return (
    <div>
      <div className="form-user">
        <form style={{display:"flex",flexDirection:"column", width:"220px"}}>
          <input type="text" placeholder="Enter your E-mail"/>
          <input type="password" placeholder="Enter your password" /> 
          <input type="password" placeholder="Enter your password on more time" />
          <button style={{backgroundColor:"yellow", color:"brown", border:"none", borderRadius:"8px", height:"30px", width:"100px"}}>Sign In</button>
          <button style={{backgroundColor:"blue", color:"white", border:"none", borderRadius:"8px", height:"30px", width:"100px"}}>Sign Out</button>
        </form>
      </div>
      <Counter />
      <Receipts /> 
      <Ingredients /> 
    </div> 
  );
};

export default App;
