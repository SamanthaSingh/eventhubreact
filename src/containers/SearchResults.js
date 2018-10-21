import React, { Component } from 'react'
import MyCalendar from './MyCalendar';

 class SearchResults extends Component {
     
  render() {
      const {events} = this.props.location.state;
    return (
      <div>
        {events.map(event =>
        <li key={event.eventId}>{event.eventDescription}
        </li>
      )}
      <MyCalendar events={events} />
      </div>
      

    )
  }
}
export default SearchResults;