import React, { Component } from 'react'
import Axios from 'axios';
import config from '../../Services/congfig'
import { Redirect } from 'react-router-dom'
import './login.css'


export default class Login extends Component {
    state = {
        username : "",
        password : ""
    }
    renderRedirect = (target) => {
        return <Redirect to={target} />
    }
    submitHandler = (e) => {
        e.preventDefault();
        Axios.post(`${config.BASER_URL}auth/signin`, this.state)
        .then(function (response) {
            localStorage.setItem('token',response.data.token)
        })
        .catch(function (error) {
            console.log(error.response.status)
        });
    }
    handleUsername = (e) => {
        this.setState({
            username : e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="username" placeholder="username" onChange={this.handleUsername} />
                        <input type="password" name="password" placeholder="password" onChange={this.handlePassword}/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
