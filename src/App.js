import {useState} from 'react';
import './App.css';

function App() {
  return (
   <>
      <h3>Calculating alcohol blood level</h3>
      <form>
        <div>
          <label>Weight</label>
          <input name="weight" type="number"></input>
        </div>
        <div>
          <label>Bottles</label>
          <input name="bottles" type="number"></input>
        </div>
        <div>
          <label>Time</label>
          <input name="time" type="number"></input>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked /><label>Male</label>
          <input type="radio" name="gender" value="female" /><label>Female</label>
        </div>
        <div>
          <output></output>
        </div>
        <button>Calculate</button>


      </form>

   
   
   
   </>
  
  );
}

export default App;
