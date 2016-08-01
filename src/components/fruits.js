import React from 'react';
import Fruit from './fruit';

const Fruits = ({ fruits }) => {
  const data = _.map(fruits, (fruit, id) => (
  <Fruit
    color={ fruit.color }
    key={ id }
    name={ name }
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
