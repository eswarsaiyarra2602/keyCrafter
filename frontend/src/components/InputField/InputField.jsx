import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineCopy, AiOutlineReload } from 'react-icons/ai';

const InputField = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialChars, setSpecialChars] = useState(true);
  const [strength, setStrength] = useState('weak');

  // Function to fetch a new password from the server
  const fetchPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/generate-password', {
        length,
        lowercase,
        uppercase,
        numbers,
        specialChars,
      });
      setPassword(response.data.password);
      // Update strength based on response if needed
      // setStrength(response.data.strength); 
    } catch (error) {
      console.error('Error fetching password:', error);
    }
  };

  // Effect to fetch a new password when any input changes
  useEffect(() => {
    fetchPassword();
  }, [length, lowercase, uppercase, numbers, specialChars]);

  // Handle length change
  const handleLengthChange = (newLength) => {
    setLength(newLength);
    fetchPassword(); // Call fetchPassword immediately after updating length
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Generate a Secure Password</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className={`flex-1 border border-gray-300 rounded-lg p-2 mr-2 ${strength}`}
        />
        <button onClick={copyToClipboard} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <AiOutlineCopy />
        </button>
        <button onClick={fetchPassword} className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-2">
          <AiOutlineReload />
        </button>
      </div>
      <div className="mb-4">
        <input
          type="range"
          min="1"
          max="50"
          value={length}
          onChange={(e) => handleLengthChange(Number(e.target.value))} // Update length using the handler
          className="w-full"
        />
      </div>
      <div className="flex justify-between mb-4 items-center">
        <button onClick={() => handleLengthChange(Math.max(1, length - 1))} className="bg-green-500 text-white rounded-full p-2">-</button>
        <span className="font-bold text-lg">{length}</span>
        <button onClick={() => handleLengthChange(Math.min(50, length + 1))} className="bg-green-500 text-white rounded-full p-2">+</button>
      </div>
      <div className="flex flex-wrap mb-4 justify-around">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
            className="mr-2"
          />
          abc
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
            className="mr-2"
          />
          ABC
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
            className="mr-2"
          />
          123
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={specialChars}
            onChange={() => setSpecialChars(!specialChars)}
            className="mr-2"
          />
          !@&
        </label>
      </div>
      <div className={`badge ${strength}`}>{strength}</div>
    </div>
  );
};

export default InputField;