import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';

class ProfilePage extends Component {

    componentDidMount() {

        let data = {      
            email : reactLocalStorage.get('email'),
          }
        axios.post(`http://localhost:3000/api/getProfileInformation`, { data })
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
                Profile Page
            </div>
        )
    }
}
export default ProfilePage;