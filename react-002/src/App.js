import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      {/* use this if serving from a subfolder: <BrowserRouter basename="/subfolder"> */}
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
