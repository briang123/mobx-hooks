import { makeAutoObservable } from 'mobx';
import RandomStore from './randomStore';
import UIStateStore from './uiStateStore';

class RootStore {
  loadedStores = []

  constructor() {
    this.RandomStore = new RandomStore(this);
    this.UIStateStore = new UIStateStore(this);
    makeAutoObservable(this);
  }

  addLoadedStore = (storeName) => {
    this.loadedStores.push(storeName);
  }
 }
 
 export default RootStore;
 