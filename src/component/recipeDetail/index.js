import React, { useState, useEffect } from "react";
import "./index.css"
import { Container, FormControl, Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import { recipeById } from './../../client/execution'

function isArrayNotEmpty(element) {
    return !!element && Array.isArray(element) && element.length > 0;
}

function getPortion(element, portions) {
    return element * portions
}

const RecipeDeatil = () => {

    const {id} = useParams();
    const [recipe, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [portions, setPortions] = useState(1);

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
            <Tabs defaultActiveKey="detail">
                <Tab eventKey="detail" title="Detail">
                    <div className="description-continer">
                        {loading ?  
                            <pr> Loading data...</pr> :
                            <div> 
                                <h3>Name: {recipe.name}</h3>
                                <label className="detail">description: {recipe.description}</label>
                                
                                <h4>
                                    Calculate ingredients for
                                    <input  type="number" 
                                            placeholder={portions} 
                                            min="1"
                                            onChange={ number => setPortions(number.target.value) }/>
                                    people
                                </h4>

                                <ListGroup>
                                    { !!recipe && isArrayNotEmpty(recipe.ingredients) ? 
                                            recipe.ingredients.map((ingredient) => {
                                                return (
                                                    <ListGroup.Item>
                                                        <b className="detail">- {getPortion(ingredient.basePortion, portions)} {ingredient.unit}</b> 
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
                                    {   !!recipe && isArrayNotEmpty(recipe.steps)? 
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
                                <h3>Curiosities </h3>
                                <ListGroup>
                                    {   !!recipe && isArrayNotEmpty(recipe.curiosities) ? 
                                            recipe.curiosities.map((element) => {
                                                return (
                                                    <ListGroup.Item>
                                                        <b className="detail">- </b> 
                                                        <pr className="detail"> {element} </pr>
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