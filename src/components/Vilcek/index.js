import React, { Component } from 'react';
import data from '../../content/vilcek.json';
import HeroProject from '../Hero/HeroProject';
import PlainText from '../PlainText';
import PlainTextHalf from '../PlainText/PlainTextHalf';
import Content from '../Content';
import Constrain from '../Constrain';
import MobileImage from '../MobileImage';
import NextProject from '../NextProject';
import Footer from '../Footer';
import LargeText from '../LargeText';

class Vilcek extends Component {
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
            />
            <PlainTextHalf
              description={data.summary}
            />
            { data.desktop_images.map(function(object, i) { 
              return <HeroProject 
                      alt={object.alt}
                      image={object.src}
                    />
              })
            }
            <LargeText
              content={data.tagline}
            />
            { data.mobile_images.map(function(object, i) { 
              return <MobileImage 
                      title={object.alt}
                      image={object.src}
                      name={object.name}
                    />
              })
            }
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

export default Vilcek;