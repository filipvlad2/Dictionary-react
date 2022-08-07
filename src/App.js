import './App.css';
import Add from './Components/Add';
import Search from './Components/Search';
import React, { useState } from 'react';

function App() {

  let [wordsList, setWordsList] = useState([]);
  let [alertMsg, setAlertMsg] = useState("");

  return (
    <div className="App">
      <div className="Content">
        <h1>Dictionary</h1>
        <Add setWordsList= {setWordsList}/>
        <Search searchWordsList= {wordsList} setAlertMsg= {setAlertMsg} alertMsg= {alertMsg}/>

        <div className="dictionary" id="dictionary">
        </div>
        <p>{alertMsg}</p>
      </div>
    </div>
  );
}

export default App;
