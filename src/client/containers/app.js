import React from 'react';
import Fruits from '../components/fruits';
import _ from 'lodash';
import store from '../model';

export default class App extends React.Component {
  
  state = { fruits: { 0: { id: 0, color: 'start', icon: 'state' }  } };

  componentWillMount() {
    store.rollFruits();
    store.on(fruits => this.setState({ fruits }));
  };

  render() {
    return (
      <div className='slots'>
        <Fruits fruits={ this.state.fruits } />
      </div>
    );
  };
};
