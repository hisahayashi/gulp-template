class Animal {
  constructor(hand, foot, tail, nakigoe) {
    this.hand = hand;
    this.foot = foot;
    this.tail = tail;
    this.nakigoe = nakigoe;
  }
  say() {
    console.log(this);
  }
};

export default Animal;
