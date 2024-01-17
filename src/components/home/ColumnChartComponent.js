import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ColumnChartComponent = () => {
  const data = [
    {
      name: 'Doanh thu',
      time: 'Mon.',
      money: 18.9,
    },
    {
      name: 'Doanh thu',
      time: 'Tue.',
      money: 28.8,
    },
    {
      name: 'Doanh thu',
      time: 'Wed',
      money: 39.3,
    },
    {
      name: 'Doanh thu',
      time: 'Thu.',
      money: 81.4,
    },
    {
      name: 'Doanh thu',
      time: 'Fri.',
      money: 47,
    },
    {
      name: 'Doanh thu',
      time: 'Sat.',
      money: 20.3,
    },
    {
      name: 'Doanh thu',
      time: 'Sun.',
      money: 24,
    },
    {
      name: 'Lợi nhuận',
      time: 'Mon.',
      money: 12.4,
    },
    {
      name: 'Lợi nhuận',
      time: 'Tue.',
      money: 23.2,
    },
    {
      name: 'Lợi nhuận',
      time: 'Wed',
      money: 34.5,
    },
    {
      name: 'Lợi nhuận',
      time: 'Thu.',
      money: 44.5,
    },
    {
      name: 'Lợi nhuận',
      time: 'Fri.',
      money: 52.6,
    },
    {
      name: 'Lợi nhuận',
      time: 'Sat.',
      money: 10.5,
    },
    {
      name: 'Lợi nhuận',
      time: 'Sun.',
      money: 12,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'time',
    yField: 'money',
    seriesField: 'name',
    label: {
    
      position: 'middle',

      layout: [
   
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Column {...config} />;
};
export default ColumnChartComponent;