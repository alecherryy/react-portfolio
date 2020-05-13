import homepage from '../../content/homepage.json';
import React, { Component } from 'react';
import Hero from '../Hero';
import Constrain from '../Constrain';
import ProjectTeaser from '../ProjectTeaser';
import Footer from '../Footer';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Constrain>
        <Hero
          isHomepage={true}
          intro={homepage.info.intro}
          squares={homepage.info.squares}
        />
          {
            homepage.projects.map(function(object, i) { 
              return <ProjectTeaser 
                      color={object.color}
                      image={object.image}
                      title={object.title}
                      description={object.description}
                      type={object.type}
                    />
            })
          }
        </Constrain>
        <Footer
          email={homepage.info.email}
        />
      </div>
    );
  }
}

export default Homepage;
