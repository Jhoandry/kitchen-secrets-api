import React, { useState, useEffect } from "react";
import "./index.css"
import {Container} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { getBetters, getWorstes } from './../../client/execution'
import RecipeList from './../recipeList/index'

const ScoreDetail = () => {
  const [betters, setBettersData] = useState([]);
  const [worstes, setWorstesData] = useState([]);

  const [loadingBetter, setLoadingBetter] = useState(true);
  const [loadingWorstes, setLoadingWorste] = useState(true);

  useEffect(() => { //find once better and worste list

    getWorstes()
    .then((data) => {
      setWorstesData(data.getWorstes)
      setLoadingWorste(false)
    })
    .catch((err) => console.log(err));

    getBetters()
      .then((data) => {
        setBettersData(data.getBetters)
        setLoadingBetter(false)
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
    <div>
      <Container>
        <h2>Kitchen Recipes</h2>
        <Tabs defaultActiveKey="betters">
            <Tab eventKey="betters" title="Betters">
              {
                loadingBetter?
                <pr> Loading data...</pr> :
                <RecipeList recipes={betters}/>
              }
            </Tab>
            <Tab eventKey="worstes" title="Worstes">
              {
                  loadingWorstes?
                  <pr> Loading data...</pr> :
                  <RecipeList recipes={worstes}/>
              }
            </Tab>
        </Tabs>
      </Container>
    </div>
    </>
  );
};

export default ScoreDetail