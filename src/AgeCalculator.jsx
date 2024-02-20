import React, { useState } from 'react';
import './AgeCalculator.css';


const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    if (isNaN(birthDateObj.getTime())) {
      alert('Please enter a valid date!');
      return;
    }

    const ageDiff = today - birthDateObj;
    const calculatedAge = new Date(ageDiff);

    setAge(Math.abs(calculatedAge.getUTCFullYear() - 1970));
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label>
        Enter your birthdate:
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateAge}>Calculate Age</button>
      <br />
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
