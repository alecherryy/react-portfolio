import React, { Component } from 'react';
import './styles.scss';

class Constrain extends Component {
  render() {
    const classes = [
      'constrain',
      this.props.modifierClasses ? this.props.modifierClasses : ''
    ]
    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default Constrain;
