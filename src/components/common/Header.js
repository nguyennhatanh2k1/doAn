import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Form, Menu, theme, Button, Layout, Space, Table, Tag, Input, Modal, Select } from 'antd';
const { Header, Content, Footer } = Layout;

const CommonHeader = ({ title }) => {
  const [collapsed, setCollapsed] = useState(false);

  const logOut = () => {
    localStorage.clear()
  }
  return (
    <Header
      style={{
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
          color: 'white',
          visibility: 'hidden',
        }}
      />
      <h1 style={{ margin: '20px 0', color: '#fff', fontWeight: "bolder" }}>{title}</h1>
      <h5 style={{ margin: '20px 20px 20px 0', color: '#fff' }}>
        <a href="/" onClick={logOut}>Đăng xuất</a>
      </h5>
    </Header>
  );
};

export default CommonHeader;