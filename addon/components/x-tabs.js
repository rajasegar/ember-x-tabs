import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import { scheduleOnce } from '@ember/runloop';
import { action } from '@ember/object';

export default class XTabsComponent extends Component {
  @tracked selectFirstTab = true;

  @action
  select(name, data) {
    this.activeName = name;
    this.activeData = data;
  }

  @action
  register(name, data) {
    let activeName = this.args.activeName;

    // Setting the data for the tabSelected, or selecting the firstTab
    if (
      name === activeName ||
      (this.selectFirstTab === true && activeName == null)
    ) {
      this.selectFirstTab = false;
      scheduleOnce('afterRender', this, function () {
        this.send('select', name, data);
      });
    }
  }
}
