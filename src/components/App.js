import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';

import '../styles/App.css';
import * as actions from '../actions';
import Recipe from './Recipe';

class App extends Component {
  render() {
    const {
      recipes,
      deleteWindowIsOpen,
      openDeleteWindow,
      closeDeleteWindow,
    } = this.props;

    const renderedRecipes = recipes.map((recipe, index) =>
      <Recipe
        key={index}
        recipe={recipe}
        deleteWindowIsOpen={deleteWindowIsOpen}
        openDeleteWindow={openDeleteWindow}
        closeDeleteWindow={closeDeleteWindow}
      />
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
  deleteWindowIsOpen: PropTypes.bool,
  openDeleteWindow: PropTypes.func,
  closeDeleteWindow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  deleteWindowIsOpen: state.deleteWindowIsOpen,
});

export default connect(mapStateToProps, actions)(App);
