import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div>
        <Title headline="Missões" />
        <div data-testid="missions" />
      </div>

    );
  }
}

export default Missions;
