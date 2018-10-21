import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './component/header';
import Menu from './component/menu';
import Cezar from './component/lab/cezar';
import Tretemiusa from './component/lab/trutemiusa';
import './App.css';

class App extends Component {
    render() {
      return (<div className="main">
            <Router>
                <div>
                    <Switch>
                        <div>
                            <Header />
                            <Route exact path="/" component={Menu} />
                            <Route path="/cezar" component={Cezar} />
                            <Route path="/tretemiusa" component={Tretemiusa} />
                        </div>
                    </Switch>
                </div>
            </Router>
      </div>);
    }
  }
  
  export default App;