import Component from '@glimmer/component';

export default class XTabsPane extends Component {
  get isActive() {
      return this.args.name === this.args.api?.activeName;
  }
}
