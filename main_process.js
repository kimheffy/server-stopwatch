// Basic init
const electron = require('electron');
const { app, BrowserWindow } = electron;

// TESTING main_process AS PARENT from CHILD PROCESS
// const { spawn } = require('child_process');
const { spawn, execFile } = require('child_process');

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800, height: 600,
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

// const child = spawn('node', ['./parent.js'], {
//   stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
// });

const child = spawn('node', ['./testserver.js']);

child.stdout.on('data', (data) => {
  // const newdata = JSON.stringify(data);
  const buf = Buffer.from(data);
  console.log('FROM main_process: ', buf.toString());
});

// execFile('node', ['./parent.js'], (err, stdout, stderr) => {
//   if (err) return err;
//   console.log('from fakechild stdout: ', stdout);
//   console.log('from fakechild stderr: ', stderr);
// });
