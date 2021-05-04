import React, { useState, useEffect } from "react";
import "./index.css"
import {Container} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { getBetters, getWorstes } from './../../client/execution'
import RecipeList from './../recipeList/index'

const ScoreDetail = () => {
  const [betters, setBettersData] = useState([]);
  const [worstes, setWorstesData] = useState({});

  useEffect(() => { //find once better and worste list
    getBetters()
      .then((data) => setBettersData(data.getBetters))
      .catch((err) => console.log(err));

    getWorstes()
      .then((data) => setWorstesData(data.getWorstes))
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
    <div>
      <Container>
        <h2>Kitchen Recipes</h2>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="betters" title="Betters">
              <RecipeList data={betters}/>
            </Tab>
            <Tab eventKey="worstes" title="Worstes">
              <RecipeList recipes={worstes}/>
            </Tab>
        </Tabs>
      
      </Container>
    </div>
    </>
  );
};

export default ScoreDetail