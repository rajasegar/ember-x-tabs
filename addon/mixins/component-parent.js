import Ember from 'ember';

const {
    A,
    run
} = Ember;

export default Ember.Mixin.create({
    children: null,

    init() {
        this._super(...arguments);
        this.set('children', A());
    },

    registerChild(child) {
        run.schedule('sync', this, function() {
            this.get('children').addObject(child);
        });
    },

    removeChild(child) {
        this.get('children').removeObject(child);
    }
});
