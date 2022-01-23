import Cart from './pages/Cart';
import Home from './pages/Home';
import Pay from './pages/Pay';
import Success from './pages/Success';
import Register from './pages/Register';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=> state.user.currentUser);
  return (
    <div className="App">
          <Router>
        <Routes>
            <Route exact  path="/" element={<Home/>}/>
            <Route  path="/cart" element={ user ? <Cart/> :  <Navigate to="/login"/>}/>
            <Route  path="/register" element={ user ? <Navigate to="/"/> :  <Register/>}/>
            <Route  path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
            <Route  path="/pay" element={<Pay/>}/>
            <Route  path="/products/:category" element={<ProductList/>}/>
            <Route  path="/product/:id" element={<Product/>}/>
            <Route  path="/success" element={<Success/>}/>
        </Routes>
    </Router>

        
    </div>
  );
}

export default App;
