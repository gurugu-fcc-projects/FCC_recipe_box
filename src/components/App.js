import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';

import '../styles/App.css';
import Recipe from './Recipe';

class App extends Component {
  render() {
    const { recipes } = this.props;

    const renderedRecipes = recipes.map((recipe, index) =>
      <Recipe key={index} recipe={recipe} />
    );

    return (
      <div className="App">
        <AppBar
          title="Recipe Box"
          showMenuIconButton={false}
          style={{backgroundColor: '#F06292'}}
        />
        <Card>
          {renderedRecipes}
        </Card>
      </div>
    );
  }
}

App.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.presetRecipes,
});

export default connect(mapStateToProps)(App);
