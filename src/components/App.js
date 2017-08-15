import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import '../styles/App.scss';
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
  const mobile = window.innerWidth > 760 ? false : true;
  const styles = {
    appBar: {
      backgroundColor: '#303F9F',
    },
    appBarMobile: {
      backgroundColor: '#303F9F',
      height: '40px',
    },
    title: {
      height: '40px',
      fontSize: '1em',
      lineHeight: '40px',
    },
    addButton: {
      position: 'fixed',
      top: 'auto',
      left: 'auto',
      bottom: 10,
      right: 10,
      margin: 0,
    }
  };

  return (
    <div className="App">

      <AppBar
        title="Recipe Box"
        showMenuIconButton={false}
        style={mobile ? styles.appBarMobile : styles.appBar}
        titleStyle={mobile ? styles.title : {}}
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
