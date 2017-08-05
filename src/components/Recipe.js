import React from 'react';

import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Recipe = ({ recipe }) => (
  <Card>
    <CardHeader
      title={recipe.name}
      actAsExpander={true}
      showExpandableButton={true} />
    <CardText expandable={true}>
      <Table>
        <TableBody>
          {recipe.ingredients.map((ingredient, index) =>
            <TableRow key={index}>
              <TableRowColumn>{ingredient}</TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </CardText>
  </Card>
);

export default Recipe;
