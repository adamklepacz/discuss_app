import React, { Component } from 'react';
import ThreadDisplay from './components/ThreadDisplay.jsx';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const config = {
      apiKey: "AIzaSyDaqLhgm3zsnW7qfO6oXSSwhjbExyT9ogc",
      authDomain: "discuss-app-27347.firebaseapp.com",
      databaseURL: "https://discuss-app-27347.firebaseio.com",
      projectId: "discuss-app-27347",
      storageBucket: "",
      messagingSenderId: "191069513250"
    }

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }
  render() {
    return (
      <div>
        <div className="panel panel-primary post-editor">
          <div className="panel-heading">
            <h6>Discuss app</h6>
          </div>
        </div>
        <ThreadDisplay database={this.database}/>
      </div>
    );
  }
}

export default App;
