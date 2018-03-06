import Object from '@ember/object';
import { copy } from '@ember/object/internals'

export default Object.create({

  _records: [
    { title: "El Aleph" },
    { title: "2666" },
    { title: "The Black Swan" }
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