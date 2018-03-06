import Ember from 'ember';

export default Ember.Object.create({

  _records: [
    { title: "El Aleph" },
    { title: "2666" },
    { title: "The Black Swan" }
  ],

  movies() {
    return Ember.copy(this._records);
  },

  addMovie(movie) {
    this._records.push(movie);
  },

  removeMovie(movie) {
    const index = this._records.indexOf(movie);
    this._records.splice(index, 1);
  }

});