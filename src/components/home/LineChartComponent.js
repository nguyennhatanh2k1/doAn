import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    "name": "Tháng 1",
    "nike": 120,
    "mlb": 110,
    "adidas": 130,
    "converse": 115,
    "puma": 125
  },
  {
    "name": "Tháng 2",
    "nike": 89,
    "mlb": 46,
    "adidas": 64,
    "converse": 49,
    "puma": 39
  },
  {
    "name": "Tháng 3",
    "nike": 137,
    "mlb": 118,
    "adidas": 62,
    "converse": 9,
    "puma": 5
  },
  {
    "name": "Tháng 4",
    "nike": 99,
    "mlb": 25,
    "adidas": 17,
    "converse": 34,
    "puma": 47
  },
  {
    "name": "Tháng 5",
    "nike": 105,
    "mlb": 35,
    "adidas": 28,
    "converse": 83,
    "puma": 25
  },
  {
    "name": "Tháng 6",
    "nike": 121,
    "mlb": 119,
    "adidas": 128,
    "converse": 123,
    "puma": 127
  },
  {
    "name": "Tháng 7",
    "nike": 77,
    "mlb": 83,
    "adidas": 72,
    "converse": 58,
    "puma": 81
  },
  {
    "name": "Tháng 8",
    "nike": 124,
    "mlb": 44,
    "adidas": 38,
    "converse": 26,
    "puma": 57
  },
  {
    "name": "Tháng 9",
    "nike": 58,
    "mlb": 120,
    "adidas": 52,
    "converse": 22,
    "puma": 96
  },
  {
    "name": "Tháng 10",
    "nike": 120,
    "mlb": 121,
    "adidas": 128,
    "converse": 123,
    "puma": 127
  },
  {
    "name": "Tháng 11",
    "nike": 95,
    "mlb": 53,
    "adidas": 36,
    "converse": 78,
    "puma": 16
  },
  {
    "name": "Tháng 12",
    "nike": 125,
    "mlb": 46,
    "adidas": 85,
    "converse": 36,
    "puma": 46
  }
]

export default class LineChartComponent extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="nike" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="mlb" stroke="#82ca9d" />
          <Line type="monotone" dataKey="adidas" stroke="#FF5733" />
          <Line type="monotone" dataKey="converse" stroke="#33FFFF" />
          <Line type="monotone" dataKey="puma" stroke="#FF33FF" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}


// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class LineChartComponent extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   }
// }

