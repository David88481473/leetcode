/* 手撸js */

// Promise的三个状态
const STATUS = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED' 
};

class MyPromise {
  constructor(executor) {
    this.status = STATUS.PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存储异步操作的then方法回调
    this.onFulfilledArray = [];
    this.onRejectedArray = [];

    let resolve = (value) => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.FULFILLED;
        this.value = value;
        this.onFulfilledArray.forEach(callback => callback());
      }
    }

    let reject = (reason) => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.REJECTED;
        this.reason = reason;
        this.onRejectedArray.forEach(callback => callback());
      }
    }

    try {
      // 立即执行executor
      executor(resolve, reject);
    } catch(error) {
      reject(error);
    }
  }

  // Promise实例方法then
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e };

    let newPromise = new MyPromise((resolve, reject) => {
      if (this.status === STATUS.FULFILLED) {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value);
            resolvePromise(newPromise, result, resolve, reject);
          } catch(e) {
            reject(e);
          }
        }, 0);
      };

      if (this.status === STATUS.REJECTED) {
        setTimeout(() => {
          try {
            let result = onRejected(this.reason);
            resolvePromise(newPromise, result, resolve, reject);
          } catch(e) {
            reject(e);
          }
        }, 0);
      };

      // 解决resolve和reject操作是异步执行的问题，还没有改变状态，就执行了then，先把操作保存起来
      if (this.status === STATUS.PENDING) {
        this.onFulfilledArray.push(() => {
          setTimeout(() => {
            try {
              let result = onFulfilled(this.value);
              resolvePromise(newPromise, result, resolve, reject);
            } catch(e) {
              reject(e);
            }
          }, 0);
        });
  
        this.onRejectedArray.push(() => {
          setTimeout(() => {
            try {
              let result = onRejected(this.reason);
              resolvePromise(newPromise, result, resolve, reject);
            } catch(e) {
              reject(e);
            }
          }, 0);
        });
      };
    });

    return newPromise;
  }
}

const resolvePromise = (newPromise, result, resolve, reject) => {
  if (newPromise === result) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  };

  let called;
  // 判断是否是promise或thenable
  if ((typeof result === 'object' && result !== null) || (typeof result === 'function')) {
    try {
      let then = result.then;
      if (typeof then === 'function') {
        then.call(result, y => {
          if (called) return;
          called = true;
          resolvePromise(newPromise, y, resolve, reject)
        })
      } else {
        // 如果有then，但不是函数，就直接resolve
        resolve(result);
      }
    } catch(e) {
      if (called) return;
      called = true;
      reject(e);
    }
  }
}