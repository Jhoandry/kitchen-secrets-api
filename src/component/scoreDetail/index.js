import React, { useState, useEffect } from "react";
import "./index.css"
import {Container} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { getBetters, getWorstes } from './../../client/execution'
import RecipeList from './../recipeList/index'


const ScoreDetail = () => {
  const [betters, setBettersData] = useState({});
  const [worstes, setWorstesData] = useState({});

  useEffect(() => {
    getBetters()
      .then((data) => setBettersData(data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    getWorstes()
      .then((data) => setWorstesData(data))
      .catch((err) => console.log(err));
  });

  return (
    <>
    <div>
      <Container>
        <h2>Kitchen Recipes</h2>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="betters" title="Betters">
              <div className="description-continer">
                <RecipeList data={betters}/>
              </div>
            </Tab>
            <Tab eventKey="worstes" title="Worstes">
              <div className="description-continer">
                {/* <RecipeList recipes={data2}/> */}
              </div>
            </Tab>
        </Tabs>
      
      </Container>
    </div>
    </>
  );
};

export default ScoreDetail