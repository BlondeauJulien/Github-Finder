import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    users: [],
    loading: false
  }


/*   async componentDidMount() {
    this.setState({ loading: true })

    const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false })
  } */

  searchUsers = async (text) => {
    this.setState({ loading: true })

    const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ users: res.data.items, loading: false })
  }

  clearUsers = () => this.setState({ users: [], loading: false })


  render() {
    const {users, loading } = this.state; // without this we would need to use this.props.users ...
    return (
      <div className="App">
        <Navbar  />
        <div className="container">
          <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={ users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users}/>
        </div>

      </div>
    );
  }
}

export default App;
