import Ember from 'ember';
import layout from '../../templates/components/x-tab/nav-item';

export default Ember.Component.extend({
    layout,
    tagName: 'li',
    classNameBindings:['active:tab-current']
});
