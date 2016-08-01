import React from 'react';

const Fruit = ({ color, name }) => <div className='fruits' label={ color } id={ name } />;

Fruit.propTypes = {
  color: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
};

export default Fruit;
