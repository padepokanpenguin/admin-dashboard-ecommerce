import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <div>
          <Sidebar />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
