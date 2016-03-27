import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyTask() {
      this.get('model').destroyRecord().then(() => {
        this.transitionToRoute('tasks');
      });
    }
  }
});
