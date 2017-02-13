/**
 * https://www.sulaeman.com/mencoba-memakai-mobx-dengan-react-untuk-pengganti-redux-biar-gak-nambah-pusing
 *
 * Author © 2017 Sulaeman <me@sulaeman.com>. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observer } from 'mobx-react';

import { TodoStore } from './Store/Todo';

import List from './List';
import Footer from './Footer';

const App = observer(class App extends Component {
  constructor() {
    super();

    this.todoStore = new TodoStore();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Total {this.todoStore.total} Todo</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List store={this.todoStore} />
        <Footer store={this.todoStore} />
      </div>
    );
  }
});

export default App;
