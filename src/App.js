
import './App.css';
import './resources/SourceCodePro-VariableFont_wght.ttf';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UnauthHome from './components/UnauthHome';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UnauthHome />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;
