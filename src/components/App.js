import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';

import '../styles/App.scss';
import { openAddDialog, openInfoDialog } from '../actions';
import Recipe from './Recipe';
import AddDialog from './AddDialog';
import DeleteDialog from './DeleteDialog';
import EditDialog from './EditDialog';
import InfoDialog from './InfoDialog';

const App = ({
  recipes,
  infoDialogIsOpen,
  openAddDialog,
  openInfoDialog,
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
    titleMobile: {
      height: '40px',
      fontSize: '1em',
      lineHeight: '40px',
    },
    appBarIcon: {
      color: '#fff',
      height: '44px',
      width: '44px',
    },
    appBarIconMobile: {
      color: '#fff',
      height: '24px',
      width: '24px',
    },
    addButton: {
      position: 'fixed',
      top: 'auto',
      left: 'auto',
      bottom: 10,
      right: 10,
      margin: 0,
    },
  };
  const infoIcon = <ActionInfoOutline style={mobile ? styles.appBarIconMobile : styles.appBarIcon} />;

  return (
    <div className="App">

      <AppBar
        title="Recipe Box"
        showMenuIconButton={false}
        iconElementRight={infoIcon}
        onRightIconButtonTouchTap={openInfoDialog}
        style={mobile ? styles.appBarMobile : styles.appBar}
        titleStyle={mobile ? styles.titleMobile : {}}
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
      <InfoDialog />

    </div>
  );
}

App.propTypes = {
  recipes: PropTypes.array.isRequired,
  infoDialogIsOpen: PropTypes.bool,
  openAddDialog: PropTypes.func,
  openInfoDialog: PropTypes.func,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  infoDialogIsOpen: state.dialogs.infoDialogIsOpen,
});

export default connect(mapStateToProps, { openAddDialog, openInfoDialog })(App);
