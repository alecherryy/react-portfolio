import React, { Component } from 'react';
import data from '../../data.json';
import nopanic from '../../nopanic.json';
import Content from '../Content';
import PlainText from '../PlainText';
import LargeText from '../LargeText';
import HeroProject from '../Hero/HeroProject';
import MobileImage from '../MobileImage';
import NextProject from '../NextProject';

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
                    key={data.mobile}
                    image={data.mobile}
                    name="modern"
                  />
          })
        }
        <LargeText
          content="Sea eu accusata erroribus ocurreret, erant dicunt repudiare cu nec, illud graece mel cu."
        />
        <NextProject 
          title="Vilcek Foundation"
        />
      </Content>
    );
  }
}

export default ProjectDetail;
