import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import teamsJson from "../lib/teams.json";
import "bootstrap/dist/css/bootstrap.css";

function VotingCard() {
  let [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamsJson);
  }, []);


  function incrementVoteCount(teamId) {
    teams = teams.map((team) => {
      if (team._id === teamId) {
        team.votes = team.votes + 1;
      }
      return team;
    });
    setTeams(teams);
  }

  return (

    <Container className="app">
      <Row>
        {teams.map((team) => {
          return (
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={require(`../images/${team.logo}`)} />
                <Card.Body>
                  <Card.Title>{team.name}</Card.Title>
                  <Button variant="success" onClick={() => incrementVoteCount(team._id)}>
                    Vote
        </Button>
                </Card.Body>
                <Card.Footer>Vote count: {team.votes}</Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>



  );
}
export default VotingCard;
