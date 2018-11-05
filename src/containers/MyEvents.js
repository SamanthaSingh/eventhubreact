import React, { Component } from 'react'
import {Tabs, Tab} from 'react-bootstrap';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import moment from 'moment';

class MyEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registeredEvents : [],
      createdEvents: [],
      visitedEvents: []

    };
  }

  componentDidMount() {

    let data = {      
      email : reactLocalStorage.get('email'),
      date : moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
    }
axios.post(`http://localhost:3000/api/getRegisteredEvents`, { data })
      .then(res => {
        console.log(res.data);
        this.setState({registeredEvents:res.data});
      })
    .catch((error) => {
      console.log(error);
    });

  

  let data2 = {      
    email : reactLocalStorage.get('email'),
    date : moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
  }
axios.post(`http://localhost:3000/api/getVisitedEvents`, { data2 })
    .then(res => {
      console.log(res.data);
      this.setState({visitedEvents:res.data});
    })
  .catch((error) => {
    console.log(error);
  });

  let data3 = {      
    email : reactLocalStorage.get('email'),
  }
axios.post(`http://localhost:3000/api/getCreatedEvents`, { data3 })
    .then(res => {
      console.log(res.data);
      this.setState({createdEvents:res.data});
    })
  .catch((error) => {
    console.log(error);
  });

}


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