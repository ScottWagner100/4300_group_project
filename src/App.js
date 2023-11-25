import './App.css';
import './resources/SourceCodePro-VariableFont_wght.ttf';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthHome from './components/AuthHome';
import UnauthHome from './components/UnauthHome';
import Login from './components/Login';
import GenerateGame from './components/GenerateGame';
import NewGameBox from './components/NewGameBox';
import Edit from './components/Edit';
import SignUp from './components/SignUp';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './context/UserContext';

export default function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:4000/api/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:4000/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
    <Router>
        <Routes>
        <Route path='/' element={<UnauthHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth' element={<AuthHome />} />
        <Route path='/gen' element={<GenerateGame />} />
        <Route path='/add' element={<NewGameBox />} /> 
        <Route path='/edit' element={<Edit />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  </Router>
  </UserContext.Provider>
  );
}
