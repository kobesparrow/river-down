import React from 'react';
import Countdown from 'react-countdown-now';
import './App.css';

function App() {

  const countDownDate = new Date("Jul 24, 2020 08:00:00").getTime()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cataract Canyon</h1>
        <h3>Summer 2020</h3>
      </header>
      <section className="countdown">
        <h4>Days til the river:</h4>
        <Countdown date={"Jul 24, 2020 08:00:00"} />
      </section>
    </div>
  );
}

export default App;
