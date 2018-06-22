import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  render() {
    return (
        <div className="col-12 d-flex p-0 my-3">
            <Search />
            <Sort />
        </div>
        
    )
  }
}

export default Control;
