import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let alcoholBloodlevel = 0;
  
    
    if (gender === 'male') {
      alcoholBloodlevel = 26.74 / (weight * 0.7)

    }
    
    else{
      alcoholBloodlevel = 26.74 / (weight * 0.6)
    }
    setResult(alcoholBloodlevel);


  }
  
  
  /*
litres: bottles * 0.33 = 0.99
grams: litres * 8 * 4.5 = 35.64
burning: weight / 10 = 8.9
grams(left): grams – (burning * time) = 26.74
result (for male): grams / (weight * 0.7)
result (for female): grams / (weight * 0.6)   */
  return (
   <>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" value={weight} onChange={e =>setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
           <select name="bottles" type="number" value={bottles} onChange={e =>setBottles(e.target.value)}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select name="time" type="number" value={time} onChange={e =>setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e =>setGender(e.target.value)}/><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e =>setGender(e.target.value)}/><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>


      </form>

   
   
   
   </>
  
  );
}

export default App;
