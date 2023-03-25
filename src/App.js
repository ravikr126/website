import React from "react";
import Header from "./Component/Header";
// import Question1 from "./Component/Question1";
import Question2 from "./Component/Question2";
import Question3 from "./Component/Question3";
import Login from "./Component/Login";
// import Footer from "./Component/Footer";
import "./App.css";
function App() {

  return (
    <div className="background">
      <Header/>
      {/* <Question1/> */}
      <div className="questions">
        <Question2/>
      </div>
      <br />
      <div className="questions">
        <Question3/>
      </div>
      <br />
      <Login/>
      {/* <Footer/> */}
    </div>


  );
}

export default App;




