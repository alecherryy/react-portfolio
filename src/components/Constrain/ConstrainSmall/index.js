import React from 'react';
import Constrain from '../../Constrain';

class ConstrainSmall extends Constrain {
  render() {
    return (
      <Constrain 
        modifierClasses="constrain-small"
        children={this.props.children}
      />
    );
  }
}

export default ConstrainSmall;
