import homepage from '../../content/homepage.json';
import React from 'react';
import Hero from '../Hero';
import Constrain from '../Constrain';
import ProjectTeaser from '../ProjectTeaser';
import Footer from '../Footer';

const Homepage = () => {
  const { intro, squares } = homepage.info;
  return (
    <div className="homepage">
      <Constrain>
      <Hero
        isHomepage={true}
        intro={intro}
        squares={squares}
      />
        { homepage.projects.map(function(object, i) { 
          return <ProjectTeaser 
                  key={object.title}
                  color={object.color}
                  image={object.image}
                  title={object.title}
                  description={object.description}
                  type={object.type}
                  link={object.link}
                />
          })
        }
      </Constrain>
      <Footer />
    </div>
  );
}

export default Homepage;
