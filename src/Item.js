/**
 * https://www.sulaeman.com/mencoba-memakai-mobx-dengan-react-untuk-pengganti-redux-biar-gak-nambah-pusing
 *
 * Author © 2017 Sulaeman <me@sulaeman.com>. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

const Item = observer(class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.handleRemove = this.handleRemove.bind(this);
  }

  render() {
    return (
      <div className="App-Item">
        {this.props.todo.id} : {this.props.todo.data.text}
        &nbsp;&nbsp;
        <button type="button" onClick={this.handleRemove}>Remove</button>
        <hr/>
      </div>
    );
  }

  handleRemove() {
    this.props.todo.delete();
  }
});

export default Item;
