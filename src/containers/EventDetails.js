import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Geocode from "react-geocode";
import GoogleMap from './GoogleMap';




Geocode.setApiKey(process.env.REACT_APP_GMAPS_KEY);

class EventDetails extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.match.params.id,
            event: [],
            redirect: false,
            eventLocationLatitude: '40.756795',
            eventLocationLongitude: '-73.954298'
        };
    }

    registerEvent = (e) => {
        e.preventDefault();
        this.setState ({redirect : true});
    }

    componentDidMount() {

        axios.get(`http://localhost:3000/api/displayEvent/${this.state.eventId}`)
        .then(res => {
            // this.setState({trackTitle: '', events: res.data, redirect:true});
            this.setState({event:res.data}, function() {
                let address = this.state.event[0].eventAddress + " " + this.state.event[0].eventLocation;
                console.log(this.state.event);
                console.log(address);
                Geocode.fromAddress(address).then(
                    response => {
                      const { lat, lng } = response.results[0].geometry.location;
                      console.log(lat, lng);
                      this.setState({eventLocationLatitude: lat, eventLocationLongitude:lng});
                    },
                    error => {
                      console.error(error);
                    }
                  );

            });            
        })
        .catch(err => console.log(err));



    }


  render() {
      const lat = this.state.eventLocationLatitude;
      const long = this.state.eventLocationLongitude;
      const location = {lat, long};
      if (this.state.redirect === false) {
          
    return (
        <React.Fragment>
        {this.state.event.map(event =>
              <div key={event.eventId}>
              <p>{event.eventDescription}</p>
              <img src ={`${event.eventPicture}`} alt="event" />
              </div>
            )}

<GoogleMap location={location} />
           
        <form onSubmit = {this.registerEvent.bind(this)}>
                        
                        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Register</button>
                    </form>

            </React.Fragment>
    )
  }


else if (this.state.redirect === true) {
    return <Redirect to={{
        pathname: '/register',
        state: { event: this.state.event }
    }}
  />
}
}
}

export default EventDetails;