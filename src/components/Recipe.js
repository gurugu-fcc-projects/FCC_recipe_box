import React from 'react';

import {
  Card,
  CardHeader,
} from 'material-ui/Card';

const Recipe = ({ recipe }) => (
  <Card>
    <CardHeader
    title={recipe.name}
    actAsExpander={true}
    showExpandableButton={true}/>
  </Card>
);

export default Recipe;
