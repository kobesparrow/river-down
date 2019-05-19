import React from 'react';
import Countdown from 'react-countdown-now';

const Countdown = () => {

  const countDownDate = new Date("Jul 24, 2020 08:00:00").getTime()
  
  return(
    <div>
      <h5>{ days }</h5>
      <Countdown date={Date.now() + countDownDate} />
    </div>
  )
}

// export default CountdownBox;