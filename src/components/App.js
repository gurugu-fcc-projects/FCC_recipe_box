import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import '../styles/App.css';
import { openAddDialog } from '../actions';
import Recipe from './Recipe';
import AddDialog from './AddDialog';
import DeleteDialog from './DeleteDialog';
import EditDialog from './EditDialog';

const App = ({
  recipes,
  openAddDialog
}) => {
  const renderedRecipes = recipes.map((recipe) =>
    <Recipe key={recipe.id} recipe={recipe} />
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
        style={{backgroundColor: '#303F9F'}}
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
      <EditDialog />

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
