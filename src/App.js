import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';

// 為了顯示出來，要用 useState
function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  }, []);

  return (
    <div className="App">
      {catFact}
    </div>
  );
}

export default App;
