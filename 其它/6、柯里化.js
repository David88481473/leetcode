function curry(fn, ...args) {
  if (args.length >= fn.length) { // 函数.length可以获取函数的参数个数
    return fn(...args); // 参数够时直接执行
  } else {
    return (..._args) => { curry(fn, ...args, ..._args) ;}
  }
}