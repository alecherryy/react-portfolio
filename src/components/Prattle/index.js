import data from '../../content/prattle.json';
import AOS from 'aos';
import React, { Component } from 'react';
import HeroProject from '../Hero/HeroProject';
import ConstrainSmall from '../Constrain/ConstrainSmall';
import DesignImage from '../DesignImage';
import PlainText from '../PlainText';
import PlainTextHalf from '../PlainText/PlainTextHalf';
import Content from '../Content';
import Constrain from '../Constrain';
import Grid from '../Grid';
import NextProject from '../NextProject';
import Footer from '../Footer';
import PlainHTMLHalf from '../PlainText/PlainHTMLHalf';

class Prattle extends Component {

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
              subtitle="The design"
              description={data.design_summary}
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
            <PlainTextHalf
              subtitle="The build"
              description={data.build_summary}
            />
            <PlainHTMLHalf>
              <h3>Database</h3>
              <p>To store our data, we picked MongoDB as our chosen database; the reason behind this choice is MongoDB's ease of us and user-friendly interface. Additionally, MongoDB features extensive support, documentation and integration with Java. The ability to create custom objects in place of the native BSON entity was crucial feature that greatly our development process.</p>
              <p>Within our database, we create 4 different tables.</p>
              <ol>
                <li><b>Users</b> - This table contains records of users who have created an account. Each record has the following attributes: username, first name, last name, password and language preference.</li>
                <li><b>Groups</b> - This table contains records of user groups that have been created within the application. Each record has the following attributes: group ID, name, description, a list of moderators and a list of users.</li>
                <li><b>Messages</b> - This table contains records of every message sent through the system. Each record includes the following attributes: content, from, time stamp, a boolean flag to determine whether or not the message is set to private, a thread and the ID of the chat the message belongs to.</li>
                <li><b>Chats</b> - This table contains records of every existing chat on the application; chats can be either user-to-user or user-to-group. Each record features a single field containing the chat ID.</li>
              </ol>
            </PlainHTMLHalf>
            <PlainHTMLHalf>
              <h3>API Design</h3>
              <p>To bridge the gap between the front end and the database, we designed several APIs to retrieve and return different information. Each API request and response is handled by the application Controller which connects to the databse and returns the appropriate data to the front end. There are a total of four APIs, each design to serve a specific function:</p>
              <ol>
                <li><b>User</b> - The User API is designed to retrieve all information pertinent to each user, such as finding an existing user, checking login credetials, find a given user within the collection of existing records and delete an existing user account.</li>
                <li><b>Group</b> - The Group API handles all requests and actions related to user groups, such as creating a group, updating a group's information, adding and removing members and mediators.</li>
                <li><b>Message</b> - The Message API is used to store, retrieve and delete messages from the system. Additionally, it handles the creating and updating to message threads.</li>
                <li><b>Application</b> - Last but not least, the Application API handles general requests and actions performed by users throughout the system, such as retrieving a list of ongoing chats, switching between user-to-user and user-to-group communication.</li>
              </ol>
            </PlainHTMLHalf>
            <PlainHTMLHalf>
              <h3>Front end and real time communication</h3>
              <p>Our front end was built using HTML, CSS and JavaScript ES6. The interface implements design patterns and elements found in the finalized designs.</p>
              <p>A core part feature of any messaging/chat applications is real time communication; this functionality was achieved via Websockets. The ChatEndPoint class was built to handle messages between users and groups, it's supported by a MessageEncoder and Decoder to allow conversation of data between the back end and the database. Additionally, the ChatEndPoint is used to fire notifications whenever a user connects or logs off the application.</p>
            </PlainHTMLHalf>
          </Constrain>
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

export default Prattle;