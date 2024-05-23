import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function EducationCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="pic"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text><span className="purple">{props.grade}</span></Card.Text>
        <Card.Text>{props.time}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default EducationCards;
