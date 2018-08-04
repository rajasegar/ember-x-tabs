import Component from '@ember/component';
import layout from '../templates/components/x-tabs-tab';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  tagName: 'li',
  classNameBindings:['isActive:tab-current'],

  ownerName: undefined,

  data: undefined,

  name: undefined,

  init() {
    this._super(...arguments);

    let register = this.get("api.registerAction");
    if (register) {
      register(this.get("name"), this.get("data"));
    }
  },

  tabName: computed("ownerName", "name", {
    get() {
      return `${this.get("ownerName")}-${this.get("name")}`;
    }
  }),

  isActive: computed("name", "api.activeName", {
    get() {
      return this.get("name") === this.get("api.activeName");
    }
  })
});
