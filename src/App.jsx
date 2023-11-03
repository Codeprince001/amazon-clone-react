import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Checkout } from './Components';
import Home from './Components/Home/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout'
            element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
