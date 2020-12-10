function deepEqual(x, y) {
  // 指向同一内存
  if (x === y) {
    return true;
  }

  if (typeof x === 'object' && x !== null && typeof y === 'object' && y !== null) {
    // 判断对象属性个数是否相等
    if (Object.keys(x).length !== Object.keys(y.length)) {
      return false;
    }
    // 递归比较对象的每个属性
    for (let prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }
  } else {
    // 不是对象，且不指向同一内存
    return false;
  }
}