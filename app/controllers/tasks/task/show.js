import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyTask() {
      return this.get('model').destroyRecord();
    }
  }
});
