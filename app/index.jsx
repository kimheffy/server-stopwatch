'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Request from './request';
// import Response from './response';
// import Chart from './graph';

class Chart extends React.Component {
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
            ['time1', 1539621091618, 1539621093924, 1539621098535, 1539621103137, 1539621107747, 1539621110052],
            ['time2', 1539621091618, 1539621093924, 1539621098535, 1539621103137, 1539621107747, 1539621110052],
            ["login", 30, 200, 100, 400, 150, 250],
            ["register", 20, 180, 240, 100, 190],
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

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Request />
        {/* <Chart /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
