import React from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation()
  const recievedObject = location.state

  return (
    <div>
      <NavBar></NavBar>
      About
      <p>id {recievedObject.id}</p>
      <p>name  {recievedObject.name}</p>
    </div>
  );
}

export default About;


