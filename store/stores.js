import { runInAction, decorate, observable, action } from 'mobx';
import { persist } from 'mobx-persist';

class BirdsStore {
  @persist('list') @observable birds = [];

  @persist @observable status = 'none';

  @action fetchBirds = () => {
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

export const birdsStore = new BirdsStore();
