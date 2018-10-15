import React, { Component } from 'react';

class Chart extends Component {
  componentDidMount() {
    this._renderChart();
  }

  _renderChart() {
    bb.generate(
      {
        bindto: '#chart',
        data: {
          xs: {
            login: "time1",
            register: "time2",
          },
          columns: [
            // ["time1", 10, 30, 45, 50, 70, 100],
            ['time1', 1539621091618, 1539621093924, 1539621098535, 1539621103137, 1539621107747, 1539621110052],
            ['time2', 1539621091618, 1539621093924, 1539621098535, 1539621103137, 1539621107747, 1539621110052],
            // ["time2", 30, 50, 75, 100, 120],
            ["login", 30, 200, 100, 400, 150, 250],
            ["register", 20, 180, 240, 100, 190],
            // ['', 1539621091618, 1539621093924, 1539621098535, 1539621103137, 1539621107747, 1539621110052, 1539621112356, 1539621114657, 1539621116959, 1539621121560, 1539621123862, 1539621126164, 1539621128468]
          ],
          xFormat: '%Q',
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: (x) => new Date(x), 
            },
          },
        },
        zoom: {
          enabled: true,
          rescale: true,
        },
      },
    );
  }

  render() {
    return <div id="chart" />;
  }
}

// module.exports = { Chart };
export default Chart;