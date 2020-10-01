import about from '../../content/about.json';
import AOS from 'aos';
import React, { Component } from 'react';
import PlainTextHalf from '../PlainText/PlainTextHalf';
import Constrain from '../Constrain';
import Grid from '../Grid';
import Footer from '../Footer';
import './styles.scss';

class About extends Component {
  componentDidMount() {
    AOS.refresh(); 
    document.body.dataset.color = 'purple';
  } 
  
  render() {
    const { title, intro, content, clients, tools } = about.info;

    return (
      <div className="about">
        <Constrain>
          <PlainTextHalf 
            title={title}
            description={intro}
          />
          <PlainTextHalf 
            description={content}
          />
          <h3>Some of the technologies and tools I work with</h3>
          <Grid>
          { clients.map(function(object, i) { 
              return <img
                      key={object.name}
                      data-aos="slide-up"
                      src={object.image}
                      alt={object.name}
                    />
              })
            }
          </Grid>
          <h3>Some of the clients I have collaborated with</h3>
          <Grid>
          { tools.map(function(object, i) { 
              return <img
                      data-aos="slide-up"
                      src={object.image}
                      alt={object.name}
                      key={object.name}
                    />
              })
            }
          </Grid>
        </Constrain>
        <Footer />
      </div>
    );
  }
}

export default About;
