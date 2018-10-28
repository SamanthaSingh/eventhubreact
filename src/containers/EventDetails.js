import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'



class EventDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.match.params.id,
            event: [],
            redirect: false
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
            this.setState({event:res.data});            
        })
        .catch(err => console.log(err));

    }


  render() {
      if (this.state.redirect === false) {
          
    return (
        <React.Fragment>
        {this.state.event.map(event =>
              <div key={event.eventId}>
              <p>{event.eventDescription}</p>
              <img src ={`${event.eventPicture}`} alt="event" />
              </div>
            )}
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