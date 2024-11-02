  import './InputField.css';
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
    const [strength, setStrength] = useState('');

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
        setStrength(response.data.strength); 
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
      <div className="max-w-xl mt-8 mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Customize Your Password</h1>

        {/* Input Field with Badge */}
        <div className="flex items-center mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 pr-20" // Add extra padding on the right
            />
            <span
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs font-semibold text-white rounded-lg ${strength}`}
            >
              {strength}
            </span>
          </div>

          {/* Copy and Reload Buttons */}
          <button onClick={copyToClipboard} className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <AiOutlineCopy />
          </button>
          <button onClick={fetchPassword} className="ml-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            <AiOutlineReload />
          </button>
        </div>

        <div className="mb-4">
          <input
            type="range"
            min="1"
            max="50"
            value={length}
            onChange={(e) => handleLengthChange(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex justify-between mb-4 items-center">
          <button
            onClick={() => handleLengthChange(Math.max(1, length - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition" // Circular and subtle styling
          >
            -
          </button>
          <span className="font-bold text-lg">length : {length}</span>
          <button
            onClick={() => handleLengthChange(Math.min(50, length + 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition" // Circular and subtle styling
          >
            +
          </button>
        </div>

        <div className="flex flex-wrap mb-4 justify-around">
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
              className="mr-2 accent-blue-500" // Change checkbox color to blue
            />
            <span className="font-bold text-black text-lg">abc</span> {/* Bold and black text */}
          </label>
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
              className="mr-2 accent-blue-500" // Change checkbox color to blue
            />
            <span className="font-bold text-black text-lg">ABC</span> {/* Bold and black text */}
          </label>
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
              className="mr-2 accent-blue-500" // Change checkbox color to blue
            />
            <span className="font-bold text-black text-lg">123</span> {/* Bold and black text */}
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={specialChars}
              onChange={() => setSpecialChars(!specialChars)}
              className="mr-2 accent-blue-500" // Change checkbox color to blue
            />
            <span className="font-bold text-black text-lg">!@&</span> {/* Bold and black text */}
          </label>
        </div>


    </div>
    );
  };

  export default InputField;