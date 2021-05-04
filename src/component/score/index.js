import React from "react";
import "./index.css"
import { useParams } from 'react-router-dom';
import { Button, Form, FormControl } from 'react-bootstrap'
import { sendScoreById } from './../../client/execution'

const Score = () => {
    
    const {id} = useParams();
    
    const submitScore = (event) => {
        event.preventDefault();
        sendScoreById(id, event.target.score.value).then((data) => {
            alert("Thanks for give us you opinion");
        })
        .catch((err) => console.log(err));
      }

    return (
        <>
        <div>
            <Form inline onSubmit={submitScore}>
                <h5> Let our know your score by this kitchen recipe </h5>
                <FormControl  as="select" name="score" className="select-score mr-sm-2" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </FormControl>
                <Button type='submit'>Save</Button>
            </Form>
        </div>
        </>
    );
};

export default Score