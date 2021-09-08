import './App.css';
import Routes from "./routes";
import CartState from './context/cart/CartState';
function App() {
  return(
    <CartState>
        <Routes />
    </CartState>
);
}

export default App;
