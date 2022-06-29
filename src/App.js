import React from 'react';
import { Routes,  Route} from "react-router-dom";
import LogInPage from './components/LogInPage.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <Routes>
    <Route path="/" element={<LogInPage/>} />
    <Route path="/home" element={<Home/>} />
</Routes>
  );
}

export default App;