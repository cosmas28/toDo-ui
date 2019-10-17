import ComponentStore from '../../stores/componentStore';
import RootStore from '../../stores';

describe('The ComponentStore', () => {
  let store;

  beforeEach(() => {
    store = new ComponentStore(RootStore);
  });

  it('should set showMoreMenu state to true', () => {
    store.setMoreMenuState();
    expect(store.showMoreMenu).toBeTruthy();
  });

  it('should set showMobileMenu state to true', () => {
    store.setMobileMenuState();
    expect(store.showMobileMenu).toBeTruthy();
  });

  it('should change activeMenu', () => {
    store.setActiveMenu('Goals');
    expect(store.activeMenu).toEqual('Goals');
  });
});
