import React, { useState } from 'react';
import { Form, Menu, theme, Button, Layout, Space, Table, Tag, Input, Modal, Select } from 'antd';
const { Header,Content, Footer } = Layout;

const CommonFooter = () => {
    return (
      <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <h5>Shoes Store ©2024 Created by FangShop</h5> 
    </Footer>
    );
  };
  
  export default CommonFooter;