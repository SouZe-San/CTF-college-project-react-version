import { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AllRoutes from "./AllRoutes";
// import BigNav from "./components/navbar/bigNav";
import NavBar from "./components/navbar/navbar";
// import Branding from "./components/branding/branding";
function App() {
  useEffect(() => {
    console.log("/id Api Will Be Fire");
  });

  return (
    <>
      <Router>
        {/* <BigNav /> */}
        <NavBar/>
        <AllRoutes />
        {/* <Branding/> */}
      </Router>
    </>
  );
}

export default App;
