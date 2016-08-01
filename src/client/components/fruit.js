import React from 'react';

const Fruit = ({ color, icon }) => {
  const fontAwesome = `fa fa-${icon} fa-5x ${icon == 'spinner' ? 'fa-spin' : ''}`;
  const style = {
    color,
  };
  return (
    <div className='fruit'>
      <span className={ fontAwesome } style={ style }></span>
    </div>
  )
};

Fruit.propTypes = {
  color: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default Fruit;
