// 非同期処理Promise
let a = 0;

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
  }, 1000);
})
  .then((b) => {
    console.log(b);
    return b;
  })
  .then((b) => {
    console.log(b);
  })
  .catch((c) => {
    console.log("catchが実行", c);
  });
