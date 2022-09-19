import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Conts from './components/Conts';
import './App.css';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/conts" element={<Conts/>}></Route>
      </Routes>
    </>    
  );
}

export default App;
