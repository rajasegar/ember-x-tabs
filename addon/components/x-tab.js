import { filter, oneWay } from '@ember/object/computed';
import Component from '@ember/component';
import { A } from '@ember/array';
import { getWithDefault, computed } from '@ember/object';
import layout from '../templates/components/x-tab';
import ComponentParent from '../mixins/component-parent';
import TabPane from './x-tab/pane';

export default Component.extend(ComponentParent, {
  layout,
  classNames: ['tabs'],
  classNameBindings: ['tab-style', 'customClass'],

  childPanes: filter('children', function(view) {
    return view instanceof TabPane;
  }),

  activeId: oneWay('childPanes.firstObject.elementId'),

  isActiveId: computed('activeId', {
    get() {
      return getWithDefault(this, 'activeId', null);
    },
    set(key, value) {
      return value;
    }
  }),

  navItems: computed('childPanes.@each.{elementId,title,icon}', function() {
    let items = A();
    this.get('childPanes').forEach((pane) => {
      let item = pane.getProperties('elementId', 'title', 'icon');
      items.push(item);
    });
    return items;
  }),

  actions: {
    select(id) {
      this.set('isActiveId', id);
      if (typeof this.get('onTabActive') === 'function') {
        this.get('onTabActive')(id);
      }
    }
  }
});
