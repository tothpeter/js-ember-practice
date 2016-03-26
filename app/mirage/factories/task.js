import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title(i) {
    return 'Task #' + i;
  },
  level: 1
});
