import React, {Fragment, Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json();
    })
    .then( users =>
      this.setState({robots:users})
    )
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1 className='tc'>Loading</h1>
    }else{
      return (
        <Fragment>
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          </div>
        </Fragment>
      )
    }
  }
}

export default App;
