function getName(arg) {
    return arg.name;
}
getName({ name: "鈴木一郎" });
function getLength(args) {
    return args.length;
}
var result = getLength({ length: 5, name: "Hello" });
console.log(result);
