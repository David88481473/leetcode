// https://juejin.cn/post/6844903805876699150

/** 1、ES6新方法flat(depth)
 * depth的值为嵌套的层数-1，也可直接写Infinity
*/
let a = [1,[2,3,[4,[5]]]];  
a.flat(4-1);
a.flat(Infinity);

/** 2、for循环 */
function flat2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat2(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

/** 3、reduce */
function flat3(arr) {
  return arr.reduce((result, cur) => {
    return result.concat(Array.isArray(cur) ? flat3(cur) : cur);
  }, []);
}