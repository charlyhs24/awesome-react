import React, { Component }from 'react';
import './App.css';
import Login from './Component/Login/Login';
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Home from './Home';
import Blog from './Component/Blog/Blog'
import CreateBlog from './Component/Blog/Create';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Login' component={Login}/>
              <Route path='/Blog' component={Blog}/>
              <Route path='/Blog-Create' component={CreateBlog}/>
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
      </div>
    )
  }
}
function NoMatch(){
  return <h1>404, Halaman tidak ditemukan</h1>
}
export default App;
