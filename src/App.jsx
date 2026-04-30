import { useEffect,useState } from 'react'
import "./App.css";


function App() {
  const [score,setScore] =useState(0)
  const [ball,setBall] =useState(0)
  const [over,setOver] =useState(0)
  const [wicket,setWicket] =useState(0)

  const addRun = (run) => {
    setScore(prev => prev + run);
    setBall(prev => prev + 1);
  };

  const addWicket = () => {
    setWicket(prev => prev + 1);
    setBall(prev => prev + 1);
  };

  useEffect(() => {
    if (ball === 6) {
      setOver(prev => prev + 1);
      setBall(0);
    }
  }, [ball]);

 
  return (
    <div className="body">
      <div className="box">
        <h3>CRICKET SCORE BOARD</h3>

  <div className="row">
    <span>Score</span>
     <span>{score}</span>
  </div>

  <div className="row">
    <span>Ball</span>
    <span>{ball}</span>
  </div>

  <div className="row">
    <span>Overs</span>
   <span>{over}</span>
  </div>

  <div className="row">
    <span>Wickets</span>
    <span>{wicket}</span>
  </div>

        <div className="buttons">
          <button onClick={() => addRun(1)}>1 Run</button>
          <button onClick={() => addRun(2)}>2 Run</button>
          <button onClick={() => addRun(3)}>3 Run</button>
          <button onClick={() => addRun(4)}>4 Run</button>
          <button onClick={() => addRun(6)}>6 Run</button>
        </div>

        <button className="wicket-button" onClick={addWicket}>
          Wicket
        </button>
      </div>
    </div>
  );
}

export default App;