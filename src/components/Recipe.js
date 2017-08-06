import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

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

const Recipe = (props) => {
  const {
    recipe,
    openDeleteWindow,
    openEditWindow,
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
          onTouchTap={openEditWindow}
          style={styles.raisedButton} />
        <RaisedButton
          label="Delete"
          secondary={true}
          onTouchTap={openDeleteWindow}
          style={styles.raisedButton} />
      </CardText>
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  openDeleteWindow: PropTypes.func,
  openEditWindow: PropTypes.func,
};

export default connect(null, actions)(Recipe);
