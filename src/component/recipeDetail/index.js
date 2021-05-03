import React from 'react'
import "./index.css"
import { Container, FormControl, Row, Col} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'

const RecipeDeatil= (recipe) => {
    return (
      <>
      <div>
        <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                <div className="description-continer">
                    <h3>Name: </h3>
                    <label>description: </label>

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