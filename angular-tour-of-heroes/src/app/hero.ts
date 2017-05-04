export class Hero {
  id: number;
  name: string;
}

export class Item {
  constructor(public name: string, public state = 'inactive'){
  }

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}