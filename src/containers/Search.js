import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router'


 class Search extends Component {

    state = {
        eventTitle : '',
        events: [],
        redirect: false
    };

    findEvent = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3000/api/searchEvents/${this.state.eventTitle}`)
        .then(res => {
            this.setState({eventTitle: '', events: res.data, redirect:true});            
        })
        .catch(err => console.log(err));
    }
    
    onChange(e) {
        this.setState({eventTitle: e.target.value})
    };

  render() {
    const { redirect } = this.state;
    if (redirect) {
        return (<Redirect to={{
            pathname: '/searchResults',
            state: { events: this.state.events }
        }} />)
    }
    return (
                <div className = "card card-body mb-4 p-4">
                    <h1 className="display-4 text-center">
                        <i className="fas fa-search"></i>
                        Search For an Event                            
                    </h1>
                    <form onSubmit = {this.findEvent.bind(this)}>
                        <div className="form-group">
                            <input 
                            type ="text"
                            className="form-control form-control-lg"
                            placeholder="Event Name"
                            name="eventTitle"
                            value={this.state.eventTitle}
                            
                            onChange={this.onChange.bind(this)}>
                            </input>
                        </div>
                        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Search</button>
                    </form>

                    

                    {/* {this.state.events.map(event =>
        <li key={event.eventId}>{event.eventDescription}
        </li>
      )} */}
                </div>
              );
          }
        
        }
     
export default Search;