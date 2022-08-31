import React from "react";
import MainDashboard from "./pages/Dashboard/MainDashboard/MainDashboard";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;
