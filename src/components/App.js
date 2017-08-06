import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import '../styles/App.css';
import * as actions from '../actions';
import Recipe from './Recipe';

class App extends Component {
  render() {
    const { recipes } = this.props;

    const renderedRecipes = recipes.map((recipe, index) =>
      <Recipe key={index} recipe={recipe} />
    );

    const styles = {
      addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
    };

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
        <FloatingActionButton secondary={true} style={styles.addButton}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

App.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps, actions)(App);
