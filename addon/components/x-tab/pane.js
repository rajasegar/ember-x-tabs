import Component from '@ember/component';
import { observer, computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import layout from '../../templates/components/x-tab/pane';
import ComponentChild from '../../mixins/component-child';

export default Component.extend(ComponentChild, {
    layout,
    classNameBindings: ['contentCurrent'],

    tagName: 'section',

    activeId: null,

    isActive: computed('activeId', 'paneId', function() {
        return this.get('activeId') === this.get('paneId');
    }).readOnly(),


    contentCurrent: true,

    _paneId: null,
    paneId: computed('_paneId', {
        get() {
            return this.get('_paneId') || this.get('elementId');
        },

        set(key, value) {
            this.set('_paneId', value);
            return value;
        }
    }),

    show() {
        this.set('contentCurrent', true);
    },

    hide() {
        this.set('contentCurrent', false);
    },

    _showHide: observer('isActive', function() { // eslint-disable-line
        if(this.get('isActive')) {
            this.show();
        } else {
            this.hide();
        }
    }),

    init() {
        this._super(...arguments);

        scheduleOnce('afterRender', this, function() {
            this.set('contentCurrent', this.get('isActive'));
        });
    }
});
