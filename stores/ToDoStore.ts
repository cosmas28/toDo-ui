import { observable, action } from 'mobx';
import axios from 'axios';

import RootStore from '.';

export type ToDoList = {
  id: number;
  title: string;
  linkedGoal: string;
  tag: string;
};

class ToDoStore {
  rootStore: RootStore;
  @observable.ref toDoList: ToDoList[] = [];
  @observable error = 'Server down';

  constructor(rootStore, initialData: ToDoList[] = []) {
    this.rootStore = rootStore;
    this.toDoList = initialData;
  }

  getAllToDos = async (): Promise<void> => {
    this.toDoList = [];
    try {
      const response = await axios.get('http://www.mocky.io/v2/5da88906120000d0d1edafc2');
      this.setToDoList(response.data.data);
    } catch (error) {
      this.setError(error);
    }
  };

  @action.bound
  setToDoList = (toDos): void => {
    this.toDoList = toDos;
  };

  @action setError = (error): void => {
    this.error = error;
  };
}

export default ToDoStore;
