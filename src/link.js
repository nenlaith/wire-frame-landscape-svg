class Link {

  constructor(point1, point2) {
    this.start = point1;
    this.end = point2;
    this.start.add_link(this);
    this.end.add_link(this);
    this.used = false;
  }

  use() {
    this.used = true;
  }

  is_used() {
    return this.used;
  }

  contains(point) {
    return point === this.start || point === this.end;
  }

  to_string() {
    return this.start.to_string() + " ----> " + this.end.to_string();
  }
}

export default Link;
