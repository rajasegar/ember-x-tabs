import Component from '@glimmer/component';

export default class XTabsTab extends Component {
  constructor() {
    super(...arguments);

    let register = this.args.api.registerAction;
    if (register) {
      register(this.args.name, this.args.data);
    }
  }

  get tabName() {
      return `${this.args.ownerName}-${this.args.name}`;
  }

  get isActive() {
      return this.args.name === this.args.api?.activeName;
  }
}
