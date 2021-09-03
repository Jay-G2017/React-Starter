// 参考:  https://webpack.js.org/configuration/dev-server/#devserveronaftersetupmiddleware

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

function mockRequests(devServer) {
  devServer.app.get('/api/todos', async function (req, res) {
    res.json([{ name: 'todo1' }, { name: 'todo2' }]);
  });
  devServer.app.post('/api/todo', async function (req, res) {
    await waitTime(300);
    res.send('ok');
  });
  devServer.app.delete(/\/api\/todo\/./, async function (req, res) {
    await waitTime(300);
    res.send('ok');
  });
}

module.exports = mockRequests;
