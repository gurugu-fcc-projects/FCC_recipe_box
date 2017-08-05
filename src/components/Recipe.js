import React from 'react';

import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Recipe = (props) => {
  const {
    recipe,
    deleteWindowIsOpen,
    openDeleteWindow,
    closeDeleteWindow,
  } = props;

  const styles = {
    subheader: {
      lineHeight: '20px',
      marginBottom: '5px',
    },
    raisedButton: {
      margin: '10px 10px 0 0',
    },
  };

  const actions = [
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

  return (
    <Card>

      <Dialog
        title="Delete recipe"
        actions={actions}
        modal={false}
        open={deleteWindowIsOpen}
        onRequestClose={closeDeleteWindow}>
        Are you sure you want to delete this recipe?
      </Dialog>

      <CardHeader
        title={recipe.name}
        actAsExpander={true}
        showExpandableButton={true} />
      <CardText expandable={true}>
        <Subheader style={styles.subheader}>Ingredients</Subheader>
        <Divider />
        <Table multiSelectable={true}>
          <TableBody displayRowCheckbox={true}>
            {recipe.ingredients.map((ingredient, index) =>
              <TableRow key={index} displayBorder={false}>
                <TableRowColumn>
                  {ingredient}
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <RaisedButton label="Edit" style={styles.raisedButton} />
        <RaisedButton
          label="Delete"
          secondary={true}
          onTouchTap={openDeleteWindow}
          style={styles.raisedButton} />
      </CardText>
    </Card>
  );
};

export default Recipe;
