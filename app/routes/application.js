import Route from '@ember/routing/route';
import db from '../utils/db';

export default Route.extend({

  model() {
    return db.movies();
  },

  actions: {
    addMovie(movie) {
      db.addMovie(movie);
      this.refresh();
    },
    removeMovie(movie) {
      db.removeMovie(movie);
      this.refresh();
    }
  }

});
