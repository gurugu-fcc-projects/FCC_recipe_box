import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Recipe Box"
          showMenuIconButton={false}
          style={{backgroundColor: '#F06292'}}
        />
      </div>
    );
  }
}

export default App;
