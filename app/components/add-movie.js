import Component from '@ember/component';
// import db from '../utils/db';

export default Component.extend({
    title: "",
    
      actions: {
    
        onEnter() {
          const title = this.get('title');
          if (title) {
            this.get('addMovie')({ title });
          }
          this.set('title', "");  // reset title
        }
    
      }
    
});
