// 传入请求数据的方法 轮询间隔
// 收到期望的响应 可以自主停止轮询 如果不是期望的响应的话继续轮询

class Poll {
  interval;
  query;
  queryParams;
  success;
  constructor({ query, queryParams, interval, success }) {
    this.interval = interval;
    this.query = query;
    this.queryParams = queryParams;
    this.success = success;
    this.loop();
  }

  loop() {
    return this.query(this.queryParams)
      .then(this.success)
      .then(poll => {
        if (poll) {
          return new Promise(resolve => {
            setTimeout(() => {
              const promise = this.loop();
              resolve(promise);
            }, this.interval);
          });
        }
      });
  }
}

export { Poll };
