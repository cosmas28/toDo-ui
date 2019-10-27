import axios from 'axios';

import ToDoStore from '../../stores/ToDoStore';
import RootStore from '../../stores';

import { toDolist } from '../../stores/fixtures';

jest.mock('axios');

describe('The ToDoStore', () => {
  let store;

  beforeEach(() => {
    store = new ToDoStore(RootStore);
  });

  it('should fetch all to do list', () => {
    const getSpy = jest.spyOn(axios, 'get');

    store.getAllToDos();
    expect(getSpy).toHaveBeenCalledWith('http://www.mocky.io/v2/5da88906120000d0d1edafc2');
  });

  it('should set the toDoList', () => {
    store.setToDoList(toDolist);
    expect(store.toDoList).toEqual(toDolist);
  });
});
