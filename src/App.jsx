import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <form action="" style={{display:"flex",flexDirection:'column', width:'480px',gap:'10px'}}>
      <label htmlFor="" style={{display:'flex',flexDirection:"column",gap:'10px'}}>
        Enter your name
        <input style={{padding:'5px 10px'}} type="text" />
      </label>
      <label htmlFor="" style={{display:'flex',flexDirection:"column",gap:'10px'}}>
        Enter your mail
        <input style={{padding:'5px 10px'}} type="text" />
      </label>
      <button style={{alignSelf:'center'}} >Submit</button>
    </form>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
