const { ipcRenderer } = require('electron');

let data;

let validateArray = ['validateUser'];
let time1 = ['time1'];

let rootArray = ['/'];
let time2 = ['time2'];

let fib = ['fib'];
let time3 = ['time3'];

let originxs = {
  validateUser: "time1",
  '/': "time2",
  fib: 'time3',
};

let chart;

ipcRenderer.on('label', (event, arg) => {
  // alert('we got data to multiXY');
  console.log('inside multiXY.js', arg);
  data = arg;


  // loop through the data
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].mark === 'validateUser') {
      validateArray.push(data[i].duration);
      time1.push(data[i].actualTime);
    }
    if (data[i].mark === '/') {
      rootArray.push(data[i].duration);
      time2.push(data[i].actualTime);
    }
    if (data[i].mark === 'fib'){
      console.log('htting fib');
      fib.push(data[i].duration);
      time3.push(data[i].actualTime);
    }
  }

  chart.load({
    xs: originxs,
    columns: [
      time1, time2, time3, validateArray, rootArray, fib,
    ],
  });
});


chart = bb.generate(
  {
    data: {
      xs: {
        validateUser: "time1",
        '/': "time2",
        fib: "time3",
      },
      columns: [
        ['time1'],
        ['time2'],
        ['time3'],
        ["validateUser"],
        ["/"],
        ['fib'],
      ],
      xFormat: '%Q',
    },
    axis: {
      x: {
        label: 'millisecond',
        type: 'timeseries',
        tick: {
          width: 100,
          format: (x) => new Date(x).getMilliseconds(),
        },
      },
      y: {
        label: 'milliseconds',
      },
    },
    zoom: {
      enabled: true,
      rescale: true,
    },
  },
);
