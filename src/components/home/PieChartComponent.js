import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const PieChartComponent = () => {
  const data = [
    {
      type: 'Chờ xác nhận',
      value: 27,
    },
    {
      type: 'Đang xử lý',
      value: 25,
    },
    {
      type: 'Đang vận chuyển',
      value: 18,
    },
    {
      type: 'Đã giao',
      value: 15,
    },
    {
      type: 'Đã hoàn thành',
      value: 10,
    },
    {
      type: 'Đã hủy',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} style={{
    padding:"0",
    margin: "-55px 0",
  }}/>;
};
export default PieChartComponent;
// ReactDOM.render(<PieChartComponent />, document.getElementById('container'));