import React, { useState, useEffect } from "react";
import "./index.css"
import { Container, FormControl, Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import { recipeById } from './../../client/execution'

const RecipeDeatil = () => {

    const {id} = useParams();
    const [recipe, setData] = useState({});
  
    useEffect(() => { //find once better and worste list
        recipeById(id)
            .then((data) => {
                console.log(data.getDetailByRecipeId);
                setData(data.getDetailByRecipeId)
            })
            .catch((err) => console.log(err));
    },{});

    return (
      <>
      <div>
        <Container>
        <h2>Kitchen Recipe</h2>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="detail" title="Detail">
                <div className="description-continer">
                    <h3>Name: {recipe.name}</h3>
                    <label>description: {recipe.description}</label>

                    <Row>
                        <Col md={4}>
                            <h4 className="list-tittle">Calculate ingredients for </h4>
                        </Col>
                        <Col md={2}>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"  placeholder="1" />
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">People</InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Col>
                    </Row>
                    
                    
                    <ListGroup>
                        <ListGroup.Item>item1 </ListGroup.Item>
                    </ListGroup>

                </div>

            </Tab>
            <Tab eventKey="steps" title="Steps">
                <div className="description-continer">
                    <h5>Steps </h5>
                    <ListGroup>
                        <ListGroup.Item>item1 </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
            <Tab eventKey="curiosities" title="Curiosities">
                <div className="description-continer">
                    <h5>Curiosities </h5>
                    <ListGroup>
                        <ListGroup.Item>item1 </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab>
        </Tabs>
        </Container>
      </div>
      </>
    );
  };
  
  export default RecipeDeatil