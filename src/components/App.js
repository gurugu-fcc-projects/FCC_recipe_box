import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import '../styles/App.css';
import * as actions from '../actions';
import Recipe from './Recipe';

class App extends Component {
  render() {
    const {
      recipes,
      deleteWindowIsOpen,
      addWindowIsOpen,
      openDeleteWindow,
      closeDeleteWindow,
      openAddWindow,
      closeAddWindow,
    } = this.props;

    const renderedRecipes = recipes.map((recipe, index) =>
      <Recipe key={index} recipe={recipe} />
    );

    const addWindowActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onTouchTap={closeAddWindow}
      />,
      <FlatButton
        label="Add"
        secondary={true}
        onTouchTap={closeAddWindow}
      />,
    ];

    const deleteWindowActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={closeDeleteWindow}
      />,
      <FlatButton
        label="Delete"
        secondary={true}
        keyboardFocused={true}
        onTouchTap={closeDeleteWindow}
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
          onTouchTap={openAddWindow}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add recipe"
          actions={addWindowActions}
          modal={false}
          open={addWindowIsOpen}
          onRequestClose={closeAddWindow}>
          Please state recipe name and add the ingredients:
        </Dialog>

        <Dialog
          title="Delete recipe"
          actions={deleteWindowActions}
          modal={false}
          open={deleteWindowIsOpen}
          onRequestClose={closeDeleteWindow}>
          Are you sure you want to delete this recipe?
        </Dialog>


      </div>
    );
  }
}

App.propTypes = {
  recipes: PropTypes.array.isRequired,
  addWindowIsOpen: PropTypes.bool,
  deleteWindowIsOpen: PropTypes.bool,
  openDeleteWindow: PropTypes.func,
  closeDeleteWindow: PropTypes.func,
  openAddWindow: PropTypes.func,
  closeAddWindow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  deleteWindowIsOpen: state.deleteWindowIsOpen,
  addWindowIsOpen: state.addWindowIsOpen,
});

export default connect(mapStateToProps, actions)(App);
