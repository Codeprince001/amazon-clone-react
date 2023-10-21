import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Checkout, Header } from './Components';
import Home from './Components/Home/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/' element={<Home />} />
          <Route path='/checkout'
            element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
