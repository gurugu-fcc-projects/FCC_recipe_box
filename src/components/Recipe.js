import React from 'react';

import {
  Card,
  CardHeader,
  CardText,
  CardTitle,
} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  subheader: {
    lineHeight: '20px',
    marginBottom: '5px',
  },
  tableRow: {
    padding: '0',
    margin: '0',
  },
  raisedButton: {
    margin: '10px 10px 0 0',
  },
};

const Recipe = ({ recipe }) => (
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
            <TableRow key={index} displayBorder={false} style={styles.tableRow}>
              <TableRowColumn>{ingredient}</TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* {recipe.ingredients.map((ingredient, index) =>
        <Card key={index}>
          <CardHeader title={ingredient} />
        </Card>
      )} */}
      <RaisedButton label="Edit" style={styles.raisedButton} />
      <RaisedButton label="Delete" secondary={true} style={styles.raisedButton} />
    </CardText>
  </Card>
);

export default Recipe;
