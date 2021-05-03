import React from 'react'
import "./index.css"
import {Container} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'

const ScoreDetail = (recipes) => {
  return (
    <>
    <div>
      <Container>
        <h2>Kitchen Recipes</h2>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="betters" title="Betters">
              <div className="description-continer">
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Average Score</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </Table>
              </div>
            </Tab>
            <Tab eventKey="worstes" title="Worstes">
              <div className="description-continer">
                <Table>
                  <thead>
                    <tr>
                      <th>Recipe Name</th>
                      <th>Average Score</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </Table>
              </div>
            </Tab>
        </Tabs>
      
      </Container>
    </div>
    </>
  );
};

export default ScoreDetail