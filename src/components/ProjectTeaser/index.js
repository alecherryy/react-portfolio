import React, { Component } from 'react';
import AOS from 'aos';
import ProjectImage from '../ProjectImage';
import './styles.scss';

class ProjectTeaser extends Component {
  componentDidMount() {
    AOS.init();
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
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
        <div className="proj-teaser__inner">
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
            <a className="proj-teaser__link" href={`${this.props.path}`}>Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTeaser;
