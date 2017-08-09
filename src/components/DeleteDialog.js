import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {
  closeDeleteDialog,
  deleteRecipe,
} from '../actions';

const DeleteDialog = ({
  deleteDialogIsOpen,
  closeDeleteDialog,
  deleteRecipe,
}) => {
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
      onTouchTap={deleteRecipe}
    />,
  ];

  return (
    <Dialog
      title="Delete recipe"
      actions={deleteDialogActions}
      modal={false}
      open={deleteDialogIsOpen}
      onRequestClose={closeDeleteDialog}>
      Are you sure you want to delete this recipe?
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  deleteDialogIsOpen: PropTypes.bool,
  closeDeleteDialog: PropTypes.func,
  deleteRecipe: PropTypes.func,
};

const mapStateToProps = (state) => ({
  deleteDialogIsOpen: state.dialogs.deleteDialogIsOpen,
});

export default connect(mapStateToProps, {
  closeDeleteDialog,
  deleteRecipe,
})(DeleteDialog);
