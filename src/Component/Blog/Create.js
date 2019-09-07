import React, { Component } from 'react'

export default class Create extends Component {
    state = {
        blog : {
            title : "",
            body : ""
        }
    }
    titleHandler = (event) => {
        let input = event.target.value
        this.setState(prevState => {
            let blog = Object.assign({},prevState)
            blog.title = input
            return { blog }
        })
    }
    bodyHandler = (event) => {
        let input = event.target.value
        this.setState(prevState => {
            let blog = {...prevState.blog}
            blog.body = input
            return { blog }
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        // this.props.history.push(`/Login`)
        console.log(this.state.blog)
    }
    render() {
        return (
            <div className="col-md-6">
                <form onSubmit={this.submitHandler}>
                    <input type="text" className="form form-conrol" onChange={this.titleHandler} placeholder="title"/>
                    <textarea className="form form-control" onChange={this.bodyHandler} placeholder="body"/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
