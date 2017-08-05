import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
        <Card>
          <Card><CardHeader
            title="Fruit Pie"
            actAsExpander={true}
            showExpandableButton={true}/></Card>
          <Card><CardHeader
            title="Steamed Veggies"
            actAsExpander={true}
            showExpandableButton={true}/></Card>
          <Card><CardHeader 
            title="Mashed Potatoes"
            actAsExpander={true}
            showExpandableButton={true}/></Card>
        </Card>
      </div>
    );
  }
}

export default App;
