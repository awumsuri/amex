import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterDisplay'
import { Provider } from 'react-redux'
import configure from './config/configure'
import 'react-activity/dist/react-activity.css';

const store = configure.configureStore()

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <CharacterList />
        </Provider>
      </div>
    );
  }
}

export default App;
