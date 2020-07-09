import projects from '../../content/projects.json';
import React from 'react';
import ProjectTeaser from '../ProjectTeaser';
import Constrain from '../Constrain';
import Footer from '../Footer';

const Projects = () => {

  return (
    <div className="projects">
      <Constrain>
        { projects.content.map(function(object, i) { 
          return <ProjectTeaser 
                  key={object.title}
                  link={object.link}
                  color={object.color}
                  image={object.image}
                  title={object.title}
                  description={object.description}
                  type={object.type}
                />
          })
        }
      </Constrain>
      <Footer />
    </div>
  );
}

export default Projects;