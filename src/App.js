import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="about" element={ <About/>}/>
        <Route path="inventory" element={<Inventory/>}/>
      </Routes>
    </div>
  );
}

export default App;
