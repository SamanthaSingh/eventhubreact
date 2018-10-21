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

  componentDidUpdate() {
    console.log(this.props);

    let newEvents = [{ 'title':"John", 'allDay':false, 'start': new Date('December 17, 2018 03:24:00'),'end': new Date('December 17, 2018 04:24:00'), }];

    // this.setState ({events: newEvents});


  }

  

  
  render() {
    let events=[
      {
        'title': 'My event',
        'allDay': false,
        'start': new Date('December 17, 2018 03:24:00'), // 10.00 AM
        'end': new Date('December 17, 2018 04:24:00'), // 2.00 PM
      }
    ]
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