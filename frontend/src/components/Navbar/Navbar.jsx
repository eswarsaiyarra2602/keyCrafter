import { useState, useEffect } from 'react';
import { AiOutlineBell, AiOutlineUser, AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie to handle cookies

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the auth token in cookies
    const token = Cookies.get('authToken'); // Get the token from cookies
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleSignOut = () => {
    // Remove token from cookies and set isAuthenticated to false
    Cookies.remove('authToken');
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to login page after sign out
  };

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

            {/* Conditionally render Sign In or Sign Out */}
            {isAuthenticated ? (
              <button onClick={handleSignOut} className="flex items-center text-white hover:text-gray-300">
                <AiOutlineUser className="h-6 w-6" />
                <span className="ml-2">Sign Out</span>
              </button>
            ) : (
              <Link to="/login">
                <button className="flex items-center text-white hover:text-gray-300">
                  <AiOutlineUser className="h-6 w-6" />
                  <span className="ml-2">Sign In</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;