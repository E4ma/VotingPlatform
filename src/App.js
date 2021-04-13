import React from "react";
import { Container } from "react-bootstrap";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import VotingCard from "./components/VotingCard";

function App() {

  return (
    <Container className="app">
      <VotingCard />
    </Container>
  );
}
export default App;
