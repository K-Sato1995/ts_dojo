// When we use the static keyword on properties we define on a class, they belong to the class itself.

class Klass {
  static hoge: string = "文字列";
}

console.log(Klass.hoge); //=> 文字列
