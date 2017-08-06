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
      addWindowIsOpen,
      openAddWindow,
      closeAddWindow,
    } = this.props;

    const renderedRecipes = recipes.map((recipe, index) =>
      <Recipe key={index} recipe={recipe} />
    );

    const actions = [
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
          actions={actions}
          modal={false}
          open={addWindowIsOpen}
          onRequestClose={closeAddWindow}>
          Please state recipe name and add the ingredients:
        </Dialog>

      </div>
    );
  }
}

App.propTypes = {
  recipes: PropTypes.array.isRequired,
  addWindowIsOpen: PropTypes.bool,
  openAddWindow: PropTypes.func,
  closeAddWindow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  addWindowIsOpen: state.addWindowIsOpen,
});

export default connect(mapStateToProps, actions)(App);
