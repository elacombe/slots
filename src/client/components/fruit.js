import React from 'react';

class Fruit extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.icon !== this.props.icon) ||
      (nextProps.color !== this.props.color);
  }

  render() {
    const fontAwesome = `fa fa-${this.props.icon} fa-5x`;
    const style = { color: this.props.color };
    return (
      <div className='fruit'>
        <span className={ fontAwesome } style={ style }></span>
      </div>
    )
  }

};

Fruit.propTypes = {
  color: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default Fruit;
