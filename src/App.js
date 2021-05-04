import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/header/index'
import Search from './component/search/index'
import ScoreDetail from './component/scoreDetail/index'
import RecipeDetail from './component/recipeDetail/index'


class App extends Component {
   
  constructor(props){
      super(props);
      
      this.state = {
        dataSource: [],
        title : "",
      };
      
    }

    render(){
      return (<div className="App">
                <Header/>
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <Search/>
                    </Route>
                    <Route path="/home">
                      <Search/>
                    </Route>
                    <Route path="/scores">
                      <ScoreDetail />
                    </Route>
                    <Route path="/recipe/:id">
                      <RecipeDetail />
                    </Route>
                  </Switch>
                </Router>
              </div>);
    }
}

export default App;
