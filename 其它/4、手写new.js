function _new(constructor, ...args) {
  // 1、新建对象
  const obj = {};
  // 2、将新建对象的原型绑定到构造函数的原型上
  obj.__proto__  = constructor.prototype;
  // 3、执行构造函数，并绑定this到新建对象上
  const result = constructor.apply(obj, args);
  // 4、如果原函数返回对象，则返回该对象；否则返回新建的对象
  return typeof result === 'object' ? result : obj;
}

function Foo(name) {
  this.name = name;
}

const foo = _new(Foo, 'fooName');