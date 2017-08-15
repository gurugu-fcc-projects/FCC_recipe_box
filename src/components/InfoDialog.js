import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { closeInfoDialog } from '../actions';

const InfoDialog = ({
  infoDialogIsOpen,
  closeInfoDialog,
}) => {
  const infoDialogActions = [
    <FlatButton
      label="Close"
      primary={true}
      onTouchTap={closeInfoDialog}
    />
  ];
  const mobile = window.innerWidth > 760 ? false : true;
  const style = {
    dialogTitle: {
      padding: '6px 24px'
    },
    dialogBody: {
      padding: '24px 24px 0 24px',
      border: 'none',
      fontSize: '12px',
    },
  };

  return (
    <Dialog
      actions={infoDialogActions}
      modal={false}
      open={infoDialogIsOpen}
      onRequestClose={closeInfoDialog}
      titleStyle={mobile ? style.dialogTitle : {}}
      bodyStyle={mobile ? style.dialogBody: {}} >
      Created by Peter Krevenets as a <a target="blanc" href="https://www.freecodecamp.com/challenges/build-a-recipe-box">FreeCodeCamp</a> react project.
      <br/><br/>
      Check my <a target="blanc" href="https://github.com/GuRuGuMaWaRu">github page</a> for more.
    </Dialog>
  );
};

InfoDialog.propTypes = {
  infoDialogIsOpen: PropTypes.bool,
  closeInfoDialog: PropTypes.func,
};

const mapStateToProps = (state) => ({
  infoDialogIsOpen: state.dialogs.infoDialogIsOpen,
});

export default connect(mapStateToProps, { closeInfoDialog })(InfoDialog);
