import React, { useState, useEffect } from "react";
import "./index.css"
import { Container, FormControl, Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import { recipeById } from './../../client/execution'

const RecipeDeatil = () => {

    const {id} = useParams();
    const [recipe, setData] = useState({});
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true)
        recipeById(id)
            .then((data) => {
                setData(data.getDetailByRecipeId)
                setLoading(false)
            })
            .catch((err) => console.log(err));
    },[]);

    return (
      <>
      <div>
        <Container>
            <h1>Kitchen Recipe</h1>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="detail" title="Detail">
                    <div className="description-continer">
                        {loading ?  
                            <pr> Loading data...</pr> :
                            <div> 
                                <h3>Name: {recipe.name}</h3>
                                <label className="detail">description: {recipe.description}</label>

                                <h4 className="list-tittle">
                                    Calculate ingredients for
                                    <input type="number" placeholder="1"/>
                                    Personas
                                </h4>

                                <ListGroup>
                                    {   (!!recipe && Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0) ? 
                                            recipe.ingredients.map((ingredient) => {
                                                return (
                                                    <ListGroup.Item>
                                                        <b className="detail">- {ingredient.basePortion} {ingredient.unit}</b> 
                                                        <pr className="detail"> {ingredient.name} </pr>
                                                    </ListGroup.Item>
                                                );
                                            }) : 
                                            <ListGroup.Item/>
                                    }
                                </ListGroup>
                            </div> 
                        }
                    </div>

                </Tab>
                <Tab eventKey="steps" title="Steps">
                    <div className="description-continer">
                        {loading ?  
                            <pr> Loading data...</pr> :
                            <div>
                                <h3>Steps </h3>
                                <ListGroup>
                                    {   (!!recipe && Array.isArray(recipe.steps) && recipe.steps.length > 0) ? 
                                            recipe.steps.map((step) => {
                                                return (
                                                    <ListGroup.Item>
                                                        <b className="detail">- {step.order} </b> 
                                                        <pr className="detail"> {step.description} </pr>
                                                    </ListGroup.Item>
                                                );
                                            }) : 
                                            <ListGroup.Item/>
                                    }
                                </ListGroup>
                            </div>
                        }
                    </div>
                </Tab>
                <Tab eventKey="curiosities" title="Curiosities">
                    <div className="description-continer">
                        {loading ?  
                            <pr> Loading data...</pr> :
                            <div>
                                <h3>Steps </h3>
                                <ListGroup>
                                    {   (!!recipe && Array.isArray(recipe.steps) && recipe.steps.length > 0) ? 
                                            recipe.steps.map((step) => {
                                                return (
                                                    <ListGroup.Item>
                                                        <b className="detail">- {step.order} </b> 
                                                        <pr className="detail"> {step.description} </pr>
                                                    </ListGroup.Item>
                                                );
                                            }) : 
                                            <ListGroup.Item/>
                                    }
                                </ListGroup>
                            </div>
                        }
                    </div>
                </Tab>
            </Tabs>
        </Container>
      </div>
      </>
    );
  };
  
  export default RecipeDeatil