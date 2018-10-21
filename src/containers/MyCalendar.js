import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './MyCalendar.css';

const localizer = BigCalendar.momentLocalizer(moment)


class MyCalendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      events : [],
    };
  }

  componentDidMount () {
    if (this.props.events.length > 0)
    {   
    let newListOfEvents = [];
    for (let i = 0 ; i<this.props.events.length ; i++) {
      let date = new Date (this.props.events[i].eventStartTime);
      let newEvent = { 'title':this.props.events[i].eventTitle, 'allDay':false, 'start':new Date(date), 'end': new Date(date),  };
      newListOfEvents.push(newEvent);
    }
    

    this.setState({events: newListOfEvents});
    }

  }

  componentWillReceiveProps(props) {

    if (props.events.length > 0)
    {   
    let newListOfEvents = [];
    for (let i = 0 ; i<props.events.length ; i++) {
      let date = new Date (props.events[i].eventStartTime);
      let newEvent = { 'title':props.events[i].eventTitle, 'allDay':false, 'start':new Date(date), 'end': new Date(date),  };
      newListOfEvents.push(newEvent);
    }
    

    this.setState({events: newListOfEvents});
    }

  }

  

  

  
  render() {
    return (
      <div className = "calendar">
     <BigCalendar
       localizer={localizer}
       events={this.state.events}
       startAccessor="start"
       endAccessor="end"
     />
   </div>
    )
  }
}

export default MyCalendar;