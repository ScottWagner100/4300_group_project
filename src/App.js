import './App.css';
import './resources/SourceCodePro-VariableFont_wght.ttf';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthHome from './components/AuthHome';
import UnauthHome from './components/UnauthHome';
import Login from './components/Login';
import GenerateGame from './components/GenerateGame';
import NewGameBox from './components/NewGameBox';

export default function App() {




  return (
    <Router>
      <Routes>
        <Route path='/' element={<UnauthHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth' element={<AuthHome />} />
        <Route path='/gen' element={<GenerateGame />} />
        <Route path='/add' element={<NewGameBox />} /> 
    </Routes>
  </Router>
  );
}
