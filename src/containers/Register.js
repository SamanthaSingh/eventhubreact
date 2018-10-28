import React, { Component } from 'react';
import AddToCalendar from 'react-add-to-calendar';


class Register extends Component {
    constructor (props) {
        super(props);

        this.state = {
            event: this.props.location.state.event,
            eventToAdd : []
        }

    }

    componentDidMount() {
        console.log(this.state.event)
        let event =  {
            title: this.state.event[0].eventTitle,
            description: this.state.event[0].eventDescription,
            location: this.state.event[0].eventLocation,
            startTime: this.state.event[0].eventStartTime,
            endTime: this.state.event[0].eventEndTime
          }
          this.setState({eventToAdd:event});


    }
  render() {
    return (
      <div>
 <AddToCalendar event={this.state.eventToAdd} listItems = {[ { apple: 'Apple Calendar' }, { google: 'Google' } ]}  displayItemIcons = {false}  />   
</div>
    )
  }
}

export default Register;