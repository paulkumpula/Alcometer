import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(3);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(1);
  const [result, setResult] = useState(0);

  
  
  
  return (
   <>
      <h3>Calculating alcohol blood level</h3>
      <form>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" value={weight} onChange={e =>setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <input name="bottles" type="number" value={bottles} onChange={e =>setBottles(e.target.value)}></input>
        </div>
        <div>
          <label>Time</label>
          <input name="time" type="number" value={time} onChange={e =>setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e =>setGender(e.target.value)}/><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e =>setGender(e.target.value)}/><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(0)}</output>
        </div>
        <button>Calculate</button>


      </form>

   
   
   
   </>
  
  );
}

export default App;
