import { makeAutoObservable } from 'mobx';

class UIStateStore {
  color = '#f00'
  loading = true
  rootStore

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.rootStore.addLoadedStore('UIStateStore');
    makeAutoObservable(this);
  }

  updateLoading = (value) => {
    //little delay for demo
    setTimeout(()=>{
      this.loading = value;
    }, 2000);
  }

}

export default UIStateStore;
