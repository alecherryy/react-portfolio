import data from '../../content/catalyst.json';
import AOS from 'aos';
import React, { Component } from 'react';
import HeroProject from '../Hero/HeroProject';
import ConstrainSmall from '../Constrain/ConstrainSmall';
import DesignImage from '../DesignImage';
import LargeText from '../LargeText';
import PlainText from '../PlainText';
import PlainTextHalf from '../PlainText/PlainTextHalf';
import Content from '../Content';
import Constrain from '../Constrain';
import Grid from '../Grid';
import NextProject from '../NextProject';
import Footer from '../Footer';

class Catalyst extends Component {

  componentWillReceiveProps() { 
    AOS.refresh(); 
  }

  componentDidMount() {
    document.body.dataset.color = data.color;
  }

  render() {
    return (
        <Content>
          <HeroProject
            title={data.title}
            image={data.featured_image}
            type={data.project_type}
            color={data.color}
          />
          <Constrain>
            <PlainText
              title={data.title}
              description={data.description}
              link={data.link}
            />
            <PlainTextHalf
              description={data.summary}
            />
            <LargeText
              content={data.tagline}
            />
          </Constrain>
          <ConstrainSmall>
            { data.designs.map(function(object, i) { 
              return <DesignImage 
                      key={object.alt}
                      alt={object.alt}
                      src={object.src}
                    />
              })
            }
          </ConstrainSmall>
          <Constrain>
          <h3>Tools and technologies</h3>
          <Grid>
          { data.tools.map(function(object, i) { 
              return <img
                      key={object.i}
                      data-aos="slide-up"
                      src={object.image}
                      alt={object.name}
                    />
              })
            }
          </Grid>
          </Constrain>
          <NextProject
            color={data.next.color}
            url={data.next.url}
            title={data.next.title}
          />
        <Footer />
      </Content>
    );
  }
}

export default Catalyst;