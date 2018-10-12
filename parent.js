const { spawn } = require('child_process');

const child = spawn('node', ['./testserver.js']);

child.stdout.on('data', (data) => {
  // parse the incoming data
  // const result = Buffer.concat(data.data).toString();
  const buf = Buffer.from(data);
  console.log('from parent.js: ', buf.toString());
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
