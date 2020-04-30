import React, { Component } from 'react';
import data from '../../data.json';
import Content from '../Content';
import ProjectTeaser from '../ProjectTeaser';

class About extends Component {
  render() {
    return (
      <Content>
        {
          data.projects.teasers.map(function(object, i) { 
            return <ProjectTeaser 
                    color={object.color}
                    image={object.image}
                    title={object.title}
                    description={object.description}
                    type={object.type}
                  />
          })
        }
      </Content>
    );
  }
}

export default About;
