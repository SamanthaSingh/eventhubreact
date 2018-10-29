import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Geosuggest from 'react-geosuggest';
import './CreateEvent.css';
import DateTimePicker from 'react-datetime-picker';



class CreateEvent extends Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLocation = this.handleLocation.bind(this);

    this.state = {
      eventTitle : '',
      eventLocation: '',
      eventAddress: '',
      eventStartTime: '',
      eventEndTime: '',
      eventSummary: '',
      eventDescription: '',
      numberOfTickets: 0,
      eventType: '',
      eventTopic: ''
    };
  }
  static defaultProps = {
    types: ['Training or Workshop','Networking Event','Social Gathering'],
    topics: ['Science or Technology','Business or Professional','Film, Media or Entertainment']
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLocation = event => {
    // this.setState({
    //   eventLocation: event.target.value
    // });
    console.log(event);
  }

  onSuggestSelect(suggest) {
    if (suggest) {
    if ( 'label' in suggest ) {
      this.setState ({ eventLocation : suggest.label })
    }
  }
  }

  onChangeStartDate(date) {
    this.setState({ eventStartTime: date }) 
  }

  onChangeEndDate(date) {
    this.setState({ eventEndTime: date }) 
  }




  


  render() {

    console.log(this.state.eventTitle);
    console.log(this.state.eventLocation);
    console.log(this.state.eventAddress);
    console.log(this.state.eventStartTime);
    console.log(this.state.eventEndTime);
    console.log(this.state.eventTopic);
    console.log(this.state.eventType);
    console.log(this.state.numberOfTickets);



    let topicOptions = this.props.topics.map(topic => {
      return <option key={topic} value={topic}>{topic}</option>
    });
    let typeOptions = this.props.types.map(type => {
      return <option key={type} value={type}>{type}</option>
    });
    return (
      <div className="CreateEvent">
        <h3>Create Event</h3>
        <form>
          <FormGroup>
            <ControlLabel>Event Title</ControlLabel>
            <FormControl type="text" placeholder="Event Title" 
            value={this.state.eventTitle}
            onChange={this.handleChange}
            name="eventTitle"
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Event Location</ControlLabel>
            <Geosuggest 
            placeholder = 'Event Location'
            country = 'ca'
            name = 'eventLocation'
            value = {this.state.eventLocation}
            onChange = {this.handleLocation}
            maxFixtures = {5}
            onSuggestSelect={this.onSuggestSelect.bind(this)}
             />
             </FormGroup>

             <FormGroup>
            <ControlLabel>Event Address</ControlLabel>
            <FormControl type="text" placeholder="Event Address" 
            value={this.state.eventAddress}
            onChange={this.handleChange}
            name="eventAddress"
            />
          </FormGroup>

          <FormGroup>
          <ControlLabel>Event starts at</ControlLabel>
          <DateTimePicker
          onChange={this.onChangeStartDate.bind(this)}
          value={this.state.eventStartTime}
        />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Event ends at</ControlLabel>
          <DateTimePicker
          onChange={this.onChangeEndDate.bind(this)}
          value={this.state.eventEndTime}
        />
        </FormGroup>


          
          <FormGroup controlId="formControlsImage">
            <ControlLabel>Upload Image</ControlLabel>
            <FormControl type="file" placeholder="Add File" />
          </FormGroup>


          <FormGroup>
            <ControlLabel>Event Summary</ControlLabel>
            <FormControl 
            componentClass="textarea" 
            placeholder="Less than 200 words"
            value={this.state.eventSummary}
            onChange={this.handleChange}
            name="eventSummary"
             />
          </FormGroup>


          <FormGroup controlId="formControlsDescription">
            <ControlLabel>Event Description</ControlLabel>
            <FormControl 
            componentClass="textarea" 
            placeholder="Event Description"
            value={this.state.eventDescription}
            onChange={this.handleChange}
            name="eventDescription"
             />
          </FormGroup>


          <FormGroup controlId="formControlsTickets">
            <ControlLabel>Number of Tickets Available</ControlLabel>
            <FormControl 
            type="number" 
            placeholder="0"
            value={this.state.numberOfTickets}
            onChange={this.handleChange}
            name="numberOfTickets" />
          </FormGroup>

          
          <FormGroup>
            <ControlLabel>Event Type</ControlLabel>
            <FormControl componentClass="select" ref="type"
            value={this.state.eventType}
            onChange={this.handleChange}
            name="eventType">
              {typeOptions}
            </FormControl>
          </FormGroup>


          <FormGroup controlId="formControlsTopic">
            <ControlLabel>Event Topic</ControlLabel>
            <FormControl componentClass="select" ref="topic"
            value={this.state.eventTopic}
            onChange={this.handleChange}
            name="eventTopic">
            >
              {topicOptions}
            </FormControl>
            </FormGroup>


          <FormGroup controlId="formControlsCreateEvent">
            <Button type="submit">Launch Event</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
