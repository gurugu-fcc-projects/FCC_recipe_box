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
import * as actions from '../actions';
import Recipe from './Recipe';
import AddDialog from './AddDialog';

class App extends Component {
  render() {
    const {
      recipes,
      deleteDialogIsOpen,
      closeDeleteDialog,
      openAddDialog,
    } = this.props;

    const renderedRecipes = recipes.map((recipe, index) =>
      <Recipe key={index} recipe={recipe} />
    );

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

        <AddDialog />

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
  openDeleteDialog: PropTypes.func,
  closeDeleteDialog: PropTypes.func,
  openAddDialog: PropTypes.func,
  closeAddDialog: PropTypes.func,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  deleteDialogIsOpen: state.dialogs.deleteDialogIsOpen,
});

export default connect(mapStateToProps, actions)(App);
