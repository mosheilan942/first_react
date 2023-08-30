import React, { useState, useEffect } from 'react';

const IntervalExample = () => {
    const [seconds, setSeconds] = useState(0);


useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(Number(Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      moshe ilan {seconds}
      </header>
    </div>
  );

//  function Footer() {
//     return (
//         <div>
//             <h5>
//                 moshe ilan
//             </h5>
//             <div>
//             </div>
//         </div>
//     )
}

export default IntervalExample;