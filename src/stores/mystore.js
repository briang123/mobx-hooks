import {
 reaction, makeAutoObservable,
} from 'mobx';

class MyStore {
  random = 0;

  constructor() {
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

export default MyStore;
