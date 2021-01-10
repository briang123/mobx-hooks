import {
 reaction, makeAutoObservable,
} from 'mobx';

class RandomStore {
  random = 0
  rootStore

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.rootStore.addLoadedStore('RandomStore');
    makeAutoObservable(this);

    reaction(
      () => this.random, 
      () =>console.log('store>random:', this.random),
    );
  }

  updateRandom = () => {
    this.random = Math.ceil(Math.random() * 100);
  }

  get getRandom() {
    return `Random number is: ${this.random}`
  }
}

export default RandomStore;
