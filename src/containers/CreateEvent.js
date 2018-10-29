import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Checkbox } from 'react-bootstrap';

class CreateEvent extends Component {
  static defaultProps = {
    types: ['Training or Workshop','Networking Event','Social Gathering'],
    topics: ['Science or Technology','Business or Professional','Film, Media or Entertainment']
  }

  render() {
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
          <FormGroup controlId="formControlsEventTitle">
            <ControlLabel>Event Title</ControlLabel>
            <FormControl type="text" placeholder="Event Title" />
          </FormGroup>
          <FormGroup controlId="formControlsEventLocation">
            <ControlLabel>Event Location</ControlLabel>
            <FormControl type="text" placeholder="Event Location" />
          </FormGroup>
          <FormGroup controlId="formControlsEventStart">
            <ControlLabel>Event starts at</ControlLabel>
            <FormControl type="date"/>
            <FormControl type="time"/>
          </FormGroup>
          <FormGroup controlId="formControlsEventEnd">
            <ControlLabel>Event ends at</ControlLabel>
            <FormControl type="date"/>
            <FormControl type="time"/>
          </FormGroup>
          <FormGroup controlId="formControlsImage">
            <ControlLabel>Upload Image</ControlLabel>
            <FormControl type="file" placeholder="Add File" />
          </FormGroup>
          <FormGroup controlId="formControlsSummary">
            <ControlLabel>Event Summary</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Less than 200 words" />
          </FormGroup>
          <FormGroup controlId="formControlsDescription">
            <ControlLabel>Event Description</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Event Description" />
          </FormGroup>
          <FormGroup controlId="formControlsTickets">
            <ControlLabel>Number of Tickets Available</ControlLabel>
            <FormControl type="number" placeholder="0" onlydigits />
          </FormGroup>
          <FormGroup controlId="formControlsType">
            <ControlLabel>Event Type</ControlLabel>
            <FormControl componentClass="select" ref="type">
              {typeOptions}
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsTopic">
            <ControlLabel>Event Topic</ControlLabel>
            <FormControl componentClass="select" ref="topic">
              {topicOptions}
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsTest">
            <Button>Personality Test</Button>
          </FormGroup>
          <FormGroup controlId="formControlsRemainder">
            <Checkbox inline>Display the amount of tickets left</Checkbox>
          </FormGroup>
          <FormGroup controlId="formControlsCreateEvent">
            <Button>Save Draft</Button>
            <Button type="submit">Launch Event</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
