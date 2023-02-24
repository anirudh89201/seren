import React from "react";
import Notes from "./Notes";
const Home = (props) => {
  return (
    <div className="container" id="home1">
      <Notes showAlert={props.showAlert}/>
    </div>
  );
};

export default Home;
