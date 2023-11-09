import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Checkout } from './Components';
import Home from './Components/Home/Home';
import { FetchIPAdress, locationContext } from './Components/Location/IPAdress';
import ProductDetail from './Components/ProductDetail';



function App() {

  const value = FetchIPAdress();
  return (
    <div>
      <locationContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout'
              element={<Checkout />} />

            <Route path='/product'
              element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </locationContext.Provider>
    </div>
  );
}

export default App;