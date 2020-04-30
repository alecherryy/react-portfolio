import React, { Component } from 'react';
import './styles.scss'; // remove this when creating a new project
import Constrain from '../Constrain';

class ProjectTeaser extends Component {
  render() {
    return (
      <div className="proj-teaser" data-color={ `color-${this.props.color}` }>
        <Constrain>
          <div className="proj-teaser__inner">
            <div className="proj-teaser__image">
            <img alt={ `${this.props.title}` } src={ `${this.props.image}` } />
            </div>
            <div className="proj-teaser__bottom">
              <h3>{ this.props.title }</h3>
              <p>{ this.props.description }</p>
              <a className="proj-teaser__link" href={ `${this.props.path}` }>Read more</a>
            </div>
            <span className="proj-teaser__type">{this.props.type}</span>
          </div>
        </Constrain>
      </div>
    );
  }
}

export default ProjectTeaser;
