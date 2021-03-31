import './App.css';
import Home from './components/home/Home';
import ProductDetails from './components/product-details/ProductDetails';
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
  <BrowserRouter>
    <div className="App">
     <Route exact path="/" component={Home} />
       <Route exact path="/product_detail/:id">
                  <ProductDetails />
                </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
