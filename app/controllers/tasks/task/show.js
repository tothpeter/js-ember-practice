import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyTask() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord().then(() => {
          this.transitionToRoute('tasks');
        });
      }
    }
  }
});
