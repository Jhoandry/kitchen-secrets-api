import React from 'react'
import "./index.css"
import { Container, Form, FormControl } from 'react-bootstrap'
import search from "../../img/search.png"

const Search = () => {
    return (
      <>
      <div>
        <Container>
          <Form inline>
            <FormControl type="text" placeholder="Find kitchen Recipe" className="mr-sm-2" />
            <img src={search} variant="outline-success"/>
          </Form>
        </Container>
      </div>
      </>
    );
  };

export default Search