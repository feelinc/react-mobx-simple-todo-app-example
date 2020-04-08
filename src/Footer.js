/**
 * https://www.sulaeman.com/mencoba-memakai-mobx-dengan-react-untuk-pengganti-redux-biar-gak-nambah-pusing
 *
 * Author © 2017 Sulaeman <me@sulaeman.com>. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';

const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;

const Footer = observer(class Footer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor() {
    super();

    extendObservable(this, {
      text: ''
    });

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextKeyDown = this.handleTextKeyDown.bind(this);
  }

  render() {
    return (
      <div className="App-footer">
        <input type="text" placeholder="Enter your text here, 'enter' when done, and 'escape' to cancel"
         onChange={this.handleTextChange}
         onKeyDown={this.handleTextKeyDown}
         value={this.text} autoFocus={true} />
      </div>
    );
  }

  handleTextChange(e) {
    this.text = e.target.value;
  }

  handleTextKeyDown(e) {
    const keyCode = (e.charCode||e.keyCode||e.which);

    if (keyCode === ESCAPE_KEY_CODE) {
      this.text = '';
    }

    if (keyCode === ENTER_KEY_CODE) {
      this.props.store.create({
        text: this.text
      }, () => {
        this.text = '';
      });
    }
  }
});

export default Footer;
