import { runInAction, decorate, observable, action } from 'mobx';
import { ignore } from 'mobx-sync';

class BirdsStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable birds = [];

  @observable status = 'none';

  @action fetchBirds = () => {
    this.birds = [];
    this.status = 'pending';
    fetch(`https://data.keadatabase.nz/birds/?page_size=10000&format=json`)
      .then((response) => response.json())
      .then((data) =>
        runInAction(() => {
          this.birds = data.results;
          this.status = 'done';
        })
      )
      .catch((error) =>
        runInAction(() => {
          this.status = 'error';
        })
      );
  };
}

class RootStore {
  constructor() {
    this.birdsStore = new BirdsStore(this);
  }

  @ignore @observable storeLoaded = false;
}

export default new RootStore();
