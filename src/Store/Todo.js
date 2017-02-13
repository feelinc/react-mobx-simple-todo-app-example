/**
 * https://www.sulaeman.com/mencoba-memakai-mobx-dengan-react-untuk-pengganti-redux-biar-gak-nambah-pusing
 *
 * Author © 2017 Sulaeman <me@sulaeman.com>. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { extendObservable } from 'mobx';
import uuid from 'node-uuid';

/**
 * The Todo item.
 */
export class Todo {

  /**
   * unique id of this todo, immutable.
   */
  id = null;

  parent = null;

  constructor(parent, id = uuid.v4()) {
    extendObservable(this, {
      data: {},
      isLoading: false
    });

    this.parent = parent;
    this.id = id;
  }

  update(json) {
    this.data = json;
  }

  delete() {
    this.parent.removeItem(this);
  }

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }

}

/**
 * The Todo Store.
 */
export class TodoStore {

  constructor() {
    extendObservable(this, {
      items: [],
      isLoading: false,
      get total() {
        return this.items.length;
      }
    });
  }

  load(params) {
    this.emptyItems();
    this.startLoading();
  }

  create(data, callback) {
    this.startLoading();

    const item = new Todo(this);
    this.items.push(item);
    item.update(data);

    if (callback) {
      callback();
    }

    this.stopLoading();
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  emptyItems() {
    this.items = [];
  }

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }

}
