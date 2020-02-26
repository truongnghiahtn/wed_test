import React, { Component } from 'react'
import Axios from "axios";

export default class TrangDichVu extends Component {
    test=()=>{
        Axios({
            method: "GET",
            url: "http://api.devfast.net//feature/api/find",
          })
            .then(result => {
       
                console.log(result)
            })
            .catch(err => {
              console.log(err.response);
            });

    }
    render() {
        return (
            <div>
                {this.test()}
                Day la trang dich vu
            </div>
        )
    }
}
