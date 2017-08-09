import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {
  closeEditDialog,
  inputRecipe,
  updateRecipe,
  showErrorMessage,
  hideErrorMessages,
} from '../actions';

const EditDialog = ({
  editDialogIsOpen,
  dialogRecipeName,
  dialogIngredients,
  inputNameError,
  inputIngredientsError,
  closeEditDialog,
  inputRecipe,
  updateRecipe,
  showErrorMessage,
  hideErrorMessages,
}) => {
  const handleInput = (event) => {
    inputRecipe(event.target.value, event.target.id);
  };

  const handleConfirm = () => {
    if (dialogRecipeName && dialogIngredients) {
      const ingredients = (dialogIngredients.split(',')).map(ingredient => {
        return ingredient.trim();
      });

      updateRecipe(dialogRecipeName, ingredients);
    } else {
      if (!dialogRecipeName) {
        showErrorMessage('inputNameError', 'This is a required field');
      }
      if (!inputIngredientsError) {
        showErrorMessage('inputIngredientsError', 'This is a required field');
      }

      window.setTimeout(() => {
        hideErrorMessages();
      }, 3000);
    }
  };

  const editDialogActions = [
    <FlatButton
      label="Cancel"
      primary={true}
      keyboardFocused={true}
      onTouchTap={closeEditDialog}
    />,
    <FlatButton
      label="Confirm"
      secondary={true}
      onTouchTap={handleConfirm}
    />,
  ];

  return (
    <Dialog
      title="Edit recipe"
      actions={editDialogActions}
      modal={false}
      open={editDialogIsOpen}
      onRequestClose={closeEditDialog}>
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

EditDialog.propTypes = {
  editDialogIsOpen: PropTypes.bool,
  dialogRecipeName: PropTypes.string,
  dialogIngredients: PropTypes.string,
  inputNameError: PropTypes.string,
  inputIngredientsError: PropTypes.string,
  closeEditDialog: PropTypes.func,
  inputRecipe: PropTypes.func,
  showErrorMessage: PropTypes.func,
  hideErrorMessages: PropTypes.func,
};

const mapStateToProps = (state) => ({
  editDialogIsOpen: state.dialogs.editDialogIsOpen,
  dialogRecipeName: state.input.dialogRecipeName,
  dialogIngredients: state.input.dialogIngredients,
  inputNameError: state.errors.inputNameError,
  inputIngredientsError: state.errors.inputIngredientsError,
});

export default connect(mapStateToProps, {
  closeEditDialog,
  inputRecipe,
  updateRecipe,
  showErrorMessage,
  hideErrorMessages,
})(EditDialog);
