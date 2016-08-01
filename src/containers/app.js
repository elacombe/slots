import React from 'react';
import { connect } from 'react-redux';
import Fruits from '../components/fruits';
import _ from 'lodash';

const App = ({ dispatch, fruits }) => {
  return (
    <div className='one-armed-bandit'>
      <Fruits fruits={fruits} />
    </div>
  );
};

App.propTypes = {
  fruits: React.PropTypes.object.isRequired,
};

export default connect(state => ({ fruits: state.fruits }))(App);
