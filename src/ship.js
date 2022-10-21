export class Ship {
  constructor(len) {
    this.length = len;
    this.hits = 0;
  }

  hit() {
    this.hits = this.hits += 1;
    return this.hits;
  }

  isSunk() {
    if (this.hits >= this.length) return true;
    return false;
  }
}
