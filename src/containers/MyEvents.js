import React, { Component } from 'react'
import {Tabs, Tab} from 'react-bootstrap';

class MyEvents extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Registered Events">
Registered Events for the user  
</Tab>
  <Tab eventKey={2} title="Created Events">
    Created Events by the user.
  </Tab>
  <Tab eventKey={3} title="History">
History of visited events  </Tab>
</Tabs>        
      </div>
    )
  }
}

export default MyEvents;