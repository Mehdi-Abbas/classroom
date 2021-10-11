import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Stream from './screens/Stream';
import People from './screens/People';
import Classwork from './screens/Classwork';
import UseWindowDimensions from './components/Screensize'
import Tabs from './components/Tabs';
import Navbar from './components/Navbar';

export default function App() {
  const { height} = UseWindowDimensions();
  return (
    <Router>

      <div style={{ display: "flex",flexDirection:"column",  height: height, justifyContent:"space-between", position:"relative"}}>
        <Navbar/>
        <div id="main" style={{padding:"8px"}}>
          <Switch>
          <Route exact path="/classroom/">
            <Stream />
          </Route>
          <Route path="/classroom/classwork">
            <Classwork />
          </Route>
          <Route path="/classroom/people">
            <People />
          </Route>
        </Switch>
        
        </div>
        
        <Tabs/>

      </div>
    </Router>
  );
}
