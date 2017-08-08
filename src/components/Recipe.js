import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openDeleteDialog, openEditDialog } from '../actions';

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

const Recipe = ({
  recipe,
  openDeleteDialog,
  openEditDialog,
}) => {
  const styles = {
    subheader: {
      lineHeight: '20px',
      marginBottom: '5px',
    },
    raisedButton: {
      margin: '10px 10px 0 0',
    },
  };

  return (
    <Card>

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
        <RaisedButton
          label="Edit"
          onTouchTap={openEditDialog}
          style={styles.raisedButton} />
        <RaisedButton
          label="Delete"
          secondary={true}
          onTouchTap={openDeleteDialog}
          style={styles.raisedButton} />
      </CardText>
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  openDeleteDialog: PropTypes.func,
  openEditDialog: PropTypes.func,
};

export default connect(null, { openDeleteDialog, openEditDialog })(Recipe);
