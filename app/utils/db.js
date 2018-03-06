import Object from '@ember/object';
import { copy } from '@ember/object/internals'

export default Object.create({

  _records: [
    { title: "Black Panther" },
    { title: "Tomb Raider" },
    { title: "Hostiles" }
  ],

  movies() {
    return copy(this._records);
  },

  addMovie(movie) {
    this._records.push(movie);
  },

  removeMovie(movie) {
    const index = this._records.indexOf(movie);
    this._records.splice(index, 1);
  }

});