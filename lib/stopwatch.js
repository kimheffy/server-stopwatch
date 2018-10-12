// const stopwatch = {
//   server: null,
//   capture: (hook) => {
//     stopwatch.server = hook;
//   },
//   start: () => {
//     stopwatch.server.on('connect', () => {
//       console.log('connected');
//     });
//   },
// };

function stopwatch() {
  this.capture = (server) => {
    server.on('request', (req, res) => {
      let time = process.hrtime();
      res.on('finish', () => {
        console.log('the total time: ', process.hrtime(time));
        // process.stdout.write(Date.now() - time);
      });
    });
  };
}

module.exports = stopwatch;
