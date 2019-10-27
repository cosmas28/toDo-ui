import { useStaticRendering } from 'mobx-react';

import ComponentStore from './componentStore';
import ToDoStore from './ToDoStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

class RootStore {
  toDoStore: ToDoStore;
  componentStore: ComponentStore;

  constructor() {
    this.toDoStore = new ToDoStore(this);
    this.componentStore = new ComponentStore(this);
  }
}

export default RootStore;
