import React, { Component } from "react";
import "./Home.css";
import axios from 'axios';
import Search from './Search';
// import MyCalendar from './MyCalendar';
import { Link } from "react-router-dom";
import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar';
import { Redirect } from 'react-router';
import {reactLocalStorage} from 'reactjs-localstorage';




export default class Home extends Component {
  constructor(props) {
    super(props);
    this.loadEvents = this.loadEvents.bind(this);

    this.state = {
      isLoading: true,
      event_list: [],
      date: new Date(),
    };
  }

  loadEvents() {

  
    let month = '' + (this.state.date.getMonth() + 1);
    let day = '' + this.state.date.getDate();
    let year = this.state.date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let formattedDate = ([year, month, day].join('-'));

    axios.get(`http://localhost:3000/api/displayEvents/${formattedDate}`)
      .then(res => {
        this.setState({ event_list: res.data })
      })
      .catch(err => console.log(err));

    this.setState({ isLoading: false });
  }

  async componentDidMount() {
    if (this.props.isAuthenticated) {
      this.loadEvents();
    }
  }


  renderLandingPage() {

    return (
      <React.Fragment>
        This is the landing page.
      </React.Fragment>
    );

  }

  onChange = (date) => {
    this.setState({ date }, function () {
      this.loadEvents();
    });
  }

  renderPersonalizedEvents() {

    if ((reactLocalStorage.get('firstLogin')) === 'true') {
      return (
      <Redirect to={{
          pathname: '/personalitySurvey',
      }} />

      );

    }

    return (
      <React.Fragment>
        <Search />
        <h2> Suggested Events: </h2>


        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />

        {this.state.event_list.map(event =>
          <a key={event.eventId} href={`eventDetails/${event.eventId}`}>
            <div >
              <p>{event.eventDescription}</p>
              <img src={`${event.eventPicture}`} alt="event" />
            </div>
          </a>
        )}
        <Link to={`/createevent`}>Create Event</Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="events">
        {this.props.isAuthenticated ? this.renderPersonalizedEvents() : this.renderLandingPage()}
      </div>
    );
  }
}