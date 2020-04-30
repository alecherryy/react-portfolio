import React, { Component } from 'react';
import data from '../../data.json';
import Hero from '../Hero';
import Content from '../Content';
import ProjectTeaser from '../ProjectTeaser';

class About extends Component {
  render() {
    return (
      <div className='homepage'>
        <Hero 
          isHomepage={true}
          squares={ data.homepage.squares }
          profession={ "front end developer" }
          intro={ data.homepage.intro }
        />

        <Content>
          {
            data.homepage.teasers.map(function(object, i) { 
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
      </div>
    );
  }
}

export default About;
