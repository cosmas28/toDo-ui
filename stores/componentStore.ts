import { observable, action } from 'mobx';

import RootStore from '.';

class ComponentStore {
  rootStore: RootStore;
  @observable.ref showMoreMenu = false;
  @observable.ref showMobileMenu = false;
  @observable.ref activeMenu = 'To-Do';
  @observable.ref showAddToDoModal = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setMoreMenuState = (): void => {
    this.showMoreMenu = !this.showMoreMenu;
  };

  @action setMobileMenuState = (): void => {
    this.showMobileMenu = !this.showMobileMenu;
  };

  @action setActiveMenu = (menuLabel: string): void => {
    this.activeMenu = menuLabel;
  };

  @action setAddToDoModal = (): void => {
    this.showAddToDoModal = !this.showAddToDoModal;
    this.showMoreMenu = false;
  };
}

export default ComponentStore;
