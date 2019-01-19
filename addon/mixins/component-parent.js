import Mixin from '@ember/object/mixin';
import { A } from '@ember/array';
import { next } from '@ember/runloop';

export default Mixin.create({
  children: null,

  init() {
    this._super(...arguments);
    this.set('children', A());
  },

  registerChild(child) {
    next(() => {
      this.get('children').addObject(child);
    });
  },

  removeChild(child) {
    this.get('children').removeObject(child);
  }
});
