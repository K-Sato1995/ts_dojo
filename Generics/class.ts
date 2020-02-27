class Klass<T> {
  item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}

let strObj = new Klass<string>("文字列１");
strObj.getItem(); //=> "文字列１"

let numObj = new Klass<number>(5);
strObj.getItem(); //=> 5
