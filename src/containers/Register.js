import React, { Component } from 'react';
import AddToCalendar from 'react-add-to-calendar';
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';
import {Button} from 'react-bootstrap';


class Register extends Component {
    constructor (props) {
        super(props);

        this.state = {
            event: this.props.location.state.event,
            eventToAdd : [],
            alreadyRegistered: 0

        }

    }

    confirmRegistration() {

        
        let data = {
            eventId : this.state.event[0].eventId,
            eventStartTime: this.state.event[0].eventStartTime,
            eventEndTime: this.state.event[0].eventEndTime,
            email : reactLocalStorage.get('email')
          }
      axios.post(`http://localhost:3000/api/registerEvent`, { data })
            .then(res => {
              this.setState({alreadyRegistered: 1});
            })
          .catch((error) => {
            console.log(error);
          });
        

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

          let data = {
            eventId : this.state.event[0].eventId,
            email : reactLocalStorage.get('email')
          }

          axios.post(`http://localhost:3000/api/checkRegistration`, { data })
            .then(res => {
                if (res.data[0].count > 0) {
                    this.setState({alreadyRegistered: 1});
                }
            })
          .catch((error) => {
            console.log(error);
          });






    }
  render() {
      let button;
      if (this.state.alreadyRegistered === 1) {
        button = <Button bsSize="large" disabled>
    Registered
  </Button>
      }
      else {
        button = <button className="btn" onClick={this.confirmRegistration.bind(this)} >
        Confirm
        </button>  
      }
      
    return (
      <div>
          {button}
 <AddToCalendar event={this.state.eventToAdd} listItems = {[ { apple: 'Apple Calendar' }, { google: 'Google' } ]}  displayItemIcons = {false}  />   
</div>
    )
  }
}

export default Register;