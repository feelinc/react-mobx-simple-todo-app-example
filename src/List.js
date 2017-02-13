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
import Item from './Item';

const List = observer(class List extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const items = this.props.store.items.map((item) => {
      return (<Item key={item.id} todo={item} />);
    });

    return (
      <div className="App-list">
        {items}
      </div>
    );
  }
});

export default List;
