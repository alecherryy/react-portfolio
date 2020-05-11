import React, { Component } from 'react';
import data from '../../data.json';
import nopanic from '../../nopanic.json';
import Content from '../Content';
import PlainText from '../PlainText';
import HeroProject from '../HeroProject';
import MobileImage from '../MobileImage';

class ProjectDetail extends Component {
  render() {
    return (
      <Content>
        <HeroProject
          title="no panic agency"
          image={nopanic.featured_image}
          type={nopanic.project_type}
        />
        <PlainText
          title={nopanic.title}
          description={nopanic.description}
        />
        {
          data.projects.teasers.map(function(object, i) { 
            return <MobileImage 
                    title="Hello there"
                    image={data.mobile}
                    name="modern"
                  />
          })
        }
      </Content>
    );
  }
}

export default ProjectDetail;
