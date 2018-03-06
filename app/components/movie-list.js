import Component from '@ember/component';

export default Component.extend({
    actions: {
        onClick() {
              this.get('removeMovie')();
            
            this.set('title', "");  // reset title
          }  
    }
});
