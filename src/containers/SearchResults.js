import React, { Component } from 'react'

 class SearchResults extends Component {
     
  render() {
      const {events} = this.props.location.state;
    return (
      <div>
        {events.map(event =>
        <li key={event.eventId}>{event.eventDescription}
        </li>
      )}
      </div>
    )
  }
}
export default SearchResults;