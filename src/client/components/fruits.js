import React from 'react';
import Fruit from './fruit';
import _ from 'lodash';

const Fruits = ({ fruits }) => {
  const data = _.map(fruits, (fruit, id) => (
  <Fruit
    color={ fruit.color }
    icon={ fruit.icon }
    key={ id }
  />)
  );

  return (
    <div className='fruits'>
      {data}
    </div>
  );
}

Fruits.propTypes = {
  fruits: React.PropTypes.object.isRequired,
}

export default Fruits;
