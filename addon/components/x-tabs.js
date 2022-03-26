import Component from "@glimmer/component";
import { scheduleOnce } from "@ember/runloop";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class XTabsComponent extends Component {
  @tracked
  activeName;

  @tracked
  activeData;

  name = "x-tabs";

  selectFirstTab = true;

  @action
  select(name, data) {
    this.activeName = name;
    this.activeData = data;
  }

  @action
  register(name, data) {
    // Setting the data for the tabSelected, or selecting the firstTab
    if (
      name === this.activeName ||
      (this.selectFirstTab === true && this.activeName == null)
    ) {
      this.selectFirstTab = false;
      scheduleOnce("afterRender", this, () => {
        this.select(name, data);
      });
    }
  }
}
