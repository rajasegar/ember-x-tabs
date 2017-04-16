import Ember from 'ember';

import ComponentParentMixin from 'ember-x-tabs/mixins/component-parent';

const {
    computed
} = Ember;

export default Ember.Mixin.create({
    _parent: computed(function() {
        return this.nearestOfType(ComponentParentMixin);
    }),

    _didRegister: false,

    _registerWithParent() {
        if(!(this._didRegister)) {
            let parent = this.get('_parent');
            if(parent) {
                parent.registerChild(this);
                this._didRegister = true;
            }
        }
    },

    _unregisterFromParent() {
        let parent = this.get('_parent');
        if(this._didRegister && parent) {
            parent.removeChild(this);
            this._didRegister = false;
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);
        this._registerWithParent();
    },

    willRender() {
        this._super(...arguments);
        this._registerWithParent();
    },

    willDestroyElement() {
        this._super(...arguments);
        this._registerWithParent();
    }
});
