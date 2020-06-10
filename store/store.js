import { runInAction, decorate, observable, action } from 'mobx';

class Store {
  @observable birds = [];

  @observable birdsStatus = 'none';

  @action fetchBirds = () => {
    this.birds = [];
    this.birdsStatus = 'pending';
    fetch(`https://data.keadatabase.nz/birds/?page_size=10000&format=json`)
      .then((response) => response.json())
      .then((data) =>
        runInAction(() => {
          this.birds = data.results;
          this.birdsStatus = 'done';
        })
      )
      .catch((error) =>
        runInAction(() => {
          this.birdsStatus = 'error';
        })
      );
  };
}

export default new Store();
