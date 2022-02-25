import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/index';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path='/contact' element={<div>contact</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
