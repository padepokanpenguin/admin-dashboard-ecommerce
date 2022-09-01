import React from "react";
import MainDashboard from "./pages/Dashboard/MainDashboard/MainDashboard";
import Sidebar from "./components/Sidebar/sidebar";
import RightSide from "./pages/Dashboard/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
