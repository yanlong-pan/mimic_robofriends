import React, {Fragment} from 'react';
import './App.css';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = () =>  {
    return (
      <Fragment>
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox/>
          <CardList robots={robots}/>
        </div>
      </Fragment>
    )
}

export default App;
