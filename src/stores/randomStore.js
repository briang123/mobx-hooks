import { reaction, makeAutoObservable } from 'mobx';

class RandomStore {
  random = 0;
  randomHistory = [];
  rootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.rootStore.addLoadedStore('RandomStore');
    makeAutoObservable(this);

    window.localStorage.removeItem('randoms');

    reaction(
      () => this.random,
      (randomNumber) => {
        const storage = window.localStorage.getItem('randoms');
        let randoms = [];
        if (storage) {
          randoms = JSON.parse(storage);
        }
        randoms.push(randomNumber);
        window.localStorage.setItem('randoms', JSON.stringify(randoms));

        //testing out localstorage
        this.randomHistory = JSON.parse(window.localStorage.getItem('randoms'));
      },
    );
  }

  updateRandom = () => {
    this.random = Math.ceil(Math.random() * 100);
  };

  get getRandom() {
    return `Random number is: ${this.random}`;
  }
  get getRandomHistory() {
    return `Random history from localStorage: ${this.randomHistory.join(', ')}`
  }
}

export default RandomStore;
