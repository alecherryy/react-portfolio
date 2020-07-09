import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectImage from '../ProjectImage';
import './styles.scss';

class ProjectTeaser extends Component {

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const el = this.myRef;
    if (
      el.getBoundingClientRect().bottom > (el.offsetHeight / 2) &&
      el.getBoundingClientRect().top <= (el.offsetHeight / 2)
    ) {
      document.body.dataset.color = `${this.props.color}`;
      el.classList.add('is-rotating');
    }
    else {
      el.classList.remove('is-rotating');
    }
  }
  render() {

    return (
      <div 
        className="proj-teaser" 
        data-color={`${this.props.color}`} 
        ref={ (ref) => { this.myRef = ref } }
        onScroll={this.handleScroll}>
        <div className="proj-teaser__inner" data-aos="slide-up">
          <ProjectImage
            color={this.props.color}
            title={this.props.title}
            image={this.props.image}
            type={this.props.type}
          />
          <div
            className="proj-teaser__bottom">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <Link className="proj-teaser__link" to={this.props.link}>View project</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTeaser;
