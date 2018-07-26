import Component from '@ember/component';
import layout from '../../templates/components/x-tab/nav-item';

export default Component.extend({
    layout,
    tagName: 'li',
    classNameBindings:['active:tab-current']
});
