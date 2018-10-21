import React, { Component } from "react";
import "./Home.css";
import axios from 'axios';
import Search from './Search';
import MyCalendar from './MyCalendar';



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      event_list: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      axios.get(`https://us-central1-gfunction-220020.cloudfunctions.net/test/api/displayEvents`)
        .then(res => {
            this.setState({event_list:res.data})
        })
        .catch(err => console.log(err));
 
    this.setState({ isLoading: false });
    }

    axios.get(`https://us-central1-gfunction-220020.cloudfunctions.net/test/api/displayEvents`)
        .then(res => {
            this.setState({event_list:res.data})
        })
        .catch(err => console.log(err));
 
    this.setState({ isLoading: false });
  }
  
  
  
  renderEvents () {
    return (
      <React.Fragment>
        <h2> Top Events: </h2>
      {this.state.event_list.map(event =>
        <li key={event.eventId}>{event.eventDescription}
        </li>
      )}
      </React.Fragment>
    );

  }

  renderPersonalizedEvents() {
    let calendar;

    if (this.state.isLoading === false) {
      calendar = <MyCalendar events={this.state.event_list} />
    }
    else {
      calendar = <MyCalendar events={{asad:'asad'}} />
    }
    return (
      <React.Fragment>
        <Search />
        <h2> Suggested Events: </h2>
      {this.state.event_list.map(event =>
        <li key={event.eventId}>{event.eventDescription}
        </li>
      )}

      {calendar}

      
      
      
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="events">
        {this.props.isAuthenticated ? this.renderPersonalizedEvents() : this.renderEvents()}
      </div>
    );
  }
}