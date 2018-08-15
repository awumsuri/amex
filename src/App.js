import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterDisplay'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <CharacterList />
        </Provider>
      </div>
    );
  }
}

export default App;
