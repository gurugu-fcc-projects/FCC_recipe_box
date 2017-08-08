import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { closeAddDialog, inputRecipe, addRecipe } from '../actions';

const AddDialog = ({
  addDialogIsOpen,
  dialogRecipeName,
  dialogIngredients,
  closeAddDialog,
  inputRecipe,
  addRecipe,
}) => {
  const handleInput = (event) => {
    inputRecipe(event.target.value, event.target.id);
  };

  const handleAdd = () => {
    const ingredients = (dialogIngredients.split(',')).map(ingredient => {
      return ingredient.trim();
    });
    // const readyIngredients = ingredientsArray
    console.log(ingredients);
    addRecipe(dialogRecipeName, ingredients);
  };

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
      onTouchTap={handleAdd}
    />,
  ];

  const inputNameError = dialogRecipeName ? '' : 'This field is required';
  const inputIngredientsError = dialogIngredients ? '' : 'This field is required';

  return (
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
        errorText={inputNameError}
        fullWidth={true}
        value={dialogRecipeName}
        onChange={handleInput}
      /><br />
      <TextField
        id="dialogIngredients"
        hintText="Enter ingredients divided by coma"
        floatingLabelText="Ingredients"
        floatingLabelFixed={true}
        errorText={inputIngredientsError}
        multiLine={true}
        fullWidth={true}
        value={dialogIngredients}
        onChange={handleInput}
      /><br />
    </Dialog>
  );
};

AddDialog.propTypes = {
  addDialogIsOpen: PropTypes.bool,
  dialogRecipeName: PropTypes.string,
  dialogIngredients: PropTypes.string,
  closeAddDialog: PropTypes.func,
  inputRecipe: PropTypes.func,
};

const mapStateToProps = (state) => ({
  addDialogIsOpen: state.dialogs.addDialogIsOpen,
  dialogRecipeName: state.input.dialogRecipeName,
  dialogIngredients: state.input.dialogIngredients,
});

export default connect(mapStateToProps, {
  closeAddDialog,
  inputRecipe,
  addRecipe
})(AddDialog);
