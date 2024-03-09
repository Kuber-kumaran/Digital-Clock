import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeWithleadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatDate = (date) => {
    const Options = { weekday: "long", year:"numeric", month:"long",
     day:"numeric"  };

    return date.toLocaleDateString(undefined, Options);
  }
  return (
    <>
   <div className='digital-clock w-96 bg-yellow-300 shadow-slate-500 shadow-lg p-4 rounded-md  text-center'>
    <h1 className='font-bold text-2xl mb-4 text-green-500'>Digital Clock</h1>
    <div className="time mb-4 text-3xl font-bold ">
      {formatTimeWithleadingZero(formatHour(currentTime.getHours()))} :
       {formatTimeWithleadingZero(currentTime.getMinutes())} : 
       {formatTimeWithleadingZero(currentTime.getSeconds())}
       {currentTime.getHours() >= 12 ? " PM" : " AM"}


    </div>
    <div className="date text-lg text-slate-600 ">{formatDate(currentTime)}</div>

   </div>
    </>
  );
}

export default App;
