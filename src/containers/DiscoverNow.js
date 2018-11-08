import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
class DiscoverNow extends Component {

  componentDidMount() {
    let data = {      
      dateString : moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
    }
  axios.post(`http://localhost:3000/api/getDiscoverNow`, { data })
      .then(res => {
        console.log(res.data);
      })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        This is discover now.
      </div>
    )
  }
}

export default DiscoverNow;