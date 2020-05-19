import about from '../../content/about.json';
import data from '../../content/data.json';
import React from 'react';
import PlainTextHalf from '../PlainText/PlainTextHalf';
import Constrain from '../Constrain';
import Grid from '../Grid';
import Footer from '../Footer';
import './styles.scss';

const About = () => {
  const { title, intro, clients } = about.info;
  const { email } = data.global;

  return (
    <div className="about">
      <Constrain>
        <PlainTextHalf 
          title={title}
          description={intro}
        />
        <h3>Some of the technologies and tools I work with</h3>
        <Grid>
        { clients.map(function(object, i) { 
            return <img
                    src={object.image}
                    alt={object.name}
                  />
            })
          }
        </Grid>
        <h3>Some of the clients I have collaborated with</h3>
        <Grid>
        { clients.map(function(object, i) { 
            return <img
                    src={object.image}
                    alt={object.name}
                  />
            })
          }
        </Grid>
      </Constrain>
      <Footer email={email}/>
    </div>
  );
}

export default About;
