// Ensure curly bracesimport './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home} from './pages/Home'; 
import { LoginSignUp } from './pages/LoginSignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginSignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;