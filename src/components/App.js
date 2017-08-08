import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import '../styles/App.css';
import { openAddDialog } from '../actions';
import Recipe from './Recipe';
import AddDialog from './AddDialog';
import DeleteDialog from './DeleteDialog';

const App = ({
  recipes,
  openAddDialog
}) => {
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

      <Card>{renderedRecipes}</Card>

      <FloatingActionButton
        secondary={true}
        style={styles.addButton}
        onTouchTap={openAddDialog}>
        <ContentAdd />
      </FloatingActionButton>

      <AddDialog />
      <DeleteDialog />

    </div>
  );
}

App.propTypes = {
  recipes: PropTypes.array.isRequired,
  openAddDialog: PropTypes.func,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps, { openAddDialog })(App);
