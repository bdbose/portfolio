/** @format */

import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';

import './index.css';
import Project from './components/projects';
import NoPage from './components/404';
import ContactForm from './components/contact';
import Blog from './components/blog';
import BlogId from './components/blog/id';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Project} />
          <Route path='/project' component={Project} />
          <Route path='/contact' component={ContactForm} />
          <Route path='/blogs' exact component={Blog} />
          <Route path='/blogs/:id' exact component={BlogId} />
          <Route path='*' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
