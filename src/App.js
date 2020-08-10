import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/common/navbar';
import Home from './components/views/home';
import CreatePost from './components/views/posts/createPost';
import ListPost from './components/views/posts/listPost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/" component={ListPost} />
        <Route path="/new-post/" component={CreatePost} />
      </Switch>
    </div>
  );
};

export default App;
