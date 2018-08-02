import Component from '@ember/component';
import layout from '../templates/components/x-tabs';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  layout,

  classNames:['tabs'],
  classNameBindings: ['tab-style', 'customClass'],

  activeName: undefined,
  activeData: undefined,

  name: "x-tabs",

  selectFirstTab: true,

  actions: {
    select(name, data) {
      this.set("activeName", name);
      this.set("activeData", data);
    },
    register(name, data) {
      let activeName = this.get("activeName");

      // Setting the data for the tabSelected, or selecting the firstTab
      if (name === activeName || (this.get("selectFirstTab") === true && activeName == null)) {
        this.set("selectFirstTab", false);
        scheduleOnce('afterRender', this, function() {
          this.send("select", name, data);
        });
      }
    }
  }

});
