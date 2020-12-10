// https://wangyaxing.cn/blog/jsCode/%E6%B5%85%E6%8B%B7%E8%B4%9D%E5%92%8C%E6%B7%B1%E6%8B%B7%E8%B4%9D.html#%E6%B5%85%E6%8B%B7%E8%B4%9D

// 浅拷贝
// Object.assign、concat、slice、...扩展
function shallowCopy (obj) {
  const newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)){
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

// 深拷贝
/**
 * 1、JSON.parse(JSON.stringify()): 无法拷贝函数；无法解决循环引用；无法拷贝特殊对象：RegExp、Date、Set、Map等序列化会丢失
 * 2、lodash库的cloneDeep
 * 3、手写
 */

function deepCopy (originObj, map = new Map()) { // 这里WeakMap可能没必要，暂时没写
  if (isObject(originObj)) {

    // 处理循环调用
    if (map.has(originObj)) {
      return map.get(originObj);
    }

    // 处理function
    if (typeof originObj === 'function') return originObj;

    // 处理特殊对象类型
    const type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
    if (type.includes(originObj.constructor)) {
      return new originObj.constructor(originObj);
    }

    // 其他对象
    let cloneObj = Object.create(Object.getPrototypeOf(originObj), Object.getOwnPropertyDescriptor(originObj)); // 会拷贝原型和属性描述
    
    map.set(originObj, cloneObj);

    for (let prop of Reflect.ownKeys(originObj)) { // Reflect.ownKeys可以获取Symbol类型属性
      cloneObj[prop] = deepCopy(originObj[prop], map);
    }

    return cloneObj;
  } else {
    return originObj;
  }
}

function isObject(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
}