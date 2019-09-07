import React, { Component } from 'react'
import './Blog.css'
import BlogModel from '../../Services/Blog'
import Alert from '../../Helper/Alert'
import { Link } from 'react-router-dom'
export default class Blog extends Component {
    state = {
        blog    : [],
        redirect: false
    }
    componentDidMount(){
        let articles = BlogModel.getBlog()
        articles.then(response => {
            this.setState({
                blog : [...response.data]
            })
            console.log(this.state.blog[0].title)
        }).catch(err => {
            console.log(err)
        })   
    }
    render() {

        return (
            <div className="container bg-dark text-light">
                {
                    this.state.blog.map((blogs,index) => (
                    <div key={index} className="box-tweet col-sm-12 bg-dark-secondary">
                        <div className="row">
                            <div className="col-sm-2">
                                <img src="/logo192.png" alt="post-img" width="100" height="100" className="rounded-circle "/>
                            </div>
                            <div className="col-sm-9">
                                <h3>{blogs.title}</h3>
                                <p>{blogs.body}</p>
                                <div className="row action">
                                    <div className="col-sm-1">
                                        <span>
                                            <Link className="text-light" to="/blog/show">Lihat</Link>
                                        </span>
                                    </div>
                                    <div className="col-sm-1">
                                        <span>
                                            <Link className="text-light" to="/blog/edit">Edit</Link>
                                        </span>
                                    </div>
                                    <div className="col-sm-1">
                                        <span>
                                            <Link className="text-light" to="/blog/delete">Hapus</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        )
    }
}
