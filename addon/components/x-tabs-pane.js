import Component from '@ember/component';
import layout from '../templates/components/x-tabs-pane';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNameBindings: ['isActive:content-current'],

  tagName: 'section',

  name: undefined,

  isActive: computed("name", "api.activeName", {
    get() {
      return this.get("name") === this.get("api.activeName");
    }
  })
});
