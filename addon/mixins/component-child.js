import Ember from 'ember';

export default Ember.Mixin.create({

    _didRegister: false,

    _registerWithParent() {
        if(!(this._didRegister)) {
            let parent = this.get('parent');
            if(parent) {
                parent.registerChild(this);
                this._didRegister = true;
            }
        }
    },

    _unregisterFromParent() {
        let parent = this.get('parent');
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
