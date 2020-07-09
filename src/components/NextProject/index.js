import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class MobileImages extends Component {
  render() {
    return (
      <div className="next-project" data-color={this.props.color}>
        <div className="next-project__inner">
          <h4>{this.props.title}</h4>
          <Link to={this.props.url}>next up</Link>
        </div>
      </div>
    );
  }
}

export default MobileImages;
