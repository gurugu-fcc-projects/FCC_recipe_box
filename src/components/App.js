import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import '../styles/App.css';
import * as actions from '../actions';
import Recipe from './Recipe';

class App extends Component {
  render() {
    const {
      recipes,
      deleteDialogIsOpen,
      addDialogIsOpen,
      dialogRecipeName,
      dialogIngredients,
      closeDeleteDialog,
      openAddDialog,
      closeAddDialog,
      inputRecipe,
    } = this.props;

    const renderedRecipes = recipes.map((recipe, index) =>
      <Recipe key={index} recipe={recipe} />
    );

    const addDialogActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onTouchTap={closeAddDialog}
      />,
      <FlatButton
        label="Add"
        secondary={true}
        onTouchTap={closeAddDialog}
      />,
    ];

    const deleteDialogActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={closeDeleteDialog}
      />,
      <FlatButton
        label="Delete"
        secondary={true}
        keyboardFocused={true}
        onTouchTap={closeDeleteDialog}
      />,
    ];

    const styles = {
      addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
    };

    const handleInput = (event) => {
      inputRecipe(event.target.value, event.target.id);
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

        <FloatingActionButton
          secondary={true}
          style={styles.addButton}
          onTouchTap={openAddDialog}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add recipe"
          actions={addDialogActions}
          modal={false}
          open={addDialogIsOpen}
          onRequestClose={closeAddDialog}>
          <TextField
            id="dialogRecipeName"
            hintText="Enter a recipe name here"
            floatingLabelText="Recipe Name"
            floatingLabelFixed={true}
            errorText="This field is required"
            fullWidth={true}
            value={dialogRecipeName}
            onChange={handleInput}
          /><br />
          <TextField
            id="dialogIngredients"
            hintText="Enter ingredients divided by coma"
            floatingLabelText="Ingredients"
            floatingLabelFixed={true}
            errorText=""
            multiLine={true}
            fullWidth={true}
            value={dialogIngredients}
            onChange={handleInput}
          /><br />
        </Dialog>

        <Dialog
          title="Delete recipe"
          actions={deleteDialogActions}
          modal={false}
          open={deleteDialogIsOpen}
          onRequestClose={closeDeleteDialog}>
          Are you sure you want to delete this recipe?
        </Dialog>

      </div>
    );
  }
}

App.propTypes = {
  recipes: PropTypes.array.isRequired,
  deleteDialogIsOpen: PropTypes.bool,
  addDialogIsOpen: PropTypes.bool,
  dialogRecipeName: PropTypes.string,
  dialogIngredients: PropTypes.string,
  openDeleteDialog: PropTypes.func,
  closeDeleteDialog: PropTypes.func,
  openAddDialog: PropTypes.func,
  closeAddDialog: PropTypes.func,
  inputRecipe: PropTypes.func,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  deleteDialogIsOpen: state.dialogs.deleteDialogIsOpen,
  addDialogIsOpen: state.dialogs.addDialogIsOpen,
  dialogRecipeName: state.input.dialogRecipeName,
  dialogIngredients: state.input.dialogIngredients,
});

export default connect(mapStateToProps, actions)(App);
