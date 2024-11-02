import { useState } from 'react';
import { AiOutlineBell, AiOutlineUser, AiOutlineSun, AiOutlineMoon } from 'react-icons/ai'; // Import necessary icons from react-icons

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center text-white font-bold text-2xl">
            KeyCrafter
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Dark mode toggle */}
            <button onClick={toggleDarkMode} className="flex items-center text-white hover:text-gray-300">
              {isDarkMode ? <AiOutlineSun className="h-6 w-6" /> : <AiOutlineMoon className="h-6 w-6" />}
              <span className="ml-2 text-white">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            {/* Notifications icon */}
            <button className="mx-4 flex items-center text-white hover:text-gray-300">
              <AiOutlineBell className="h-6 w-6" />
              <span className="ml-2">Notifications</span>
            </button>
            {/* Sign In button */}
            <button className="flex items-center text-white hover:text-gray-300">
              <AiOutlineUser className="h-6 w-6" />
              <span className="ml-2">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;