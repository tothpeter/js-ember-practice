import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},
  actions: {
    save() {
      let model = this.store.createRecord('task', this.get('newModel'));

      model.save().then(() => {
        this.set('newModel', {});
        this.transitionToRoute('tasks.task.show', model);
      });
    }
  }
});
