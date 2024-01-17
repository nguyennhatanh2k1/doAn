import React, { useState } from 'react';
import CommonHeader from '../common/Header';
import CommonFooter from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPenToSquare,
  faFileExport
} from '@fortawesome/free-solid-svg-icons';
import { Form, Menu, theme, Button, Layout, Space, Table, Tag, Input, Modal, Select, notification , Col, Row } from 'antd';
// import { Upload, DatePicker, InputNumber} from 'antd';
// import "../../CustomUpload.css"
import classes from "../../styles/css/order/orderStyle.module.css";

import OrderModalAdd from './OrderModalAdd';
import OrderModalUpdate from './OrderModalUpdate';
const { Content, } = Layout;
const { Search } = Input;
const { TextArea } = Input;

const objectName = 'hóa đơn '
const title = `Quản lý ${objectName}`



const DEFAULT_TYPE_TABLE = {
  CHO_THANH_TOAN: 0,
  CHO_XAC_NHAN: 1,
  DANG_CHUAN_BI: 2,
  DANG_GIAO: 3,
  HOAN_THANH: 4,
  HUY: 5,
};
const OrderComponent = (props) => {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const [dataRecord, setDataRecord] = useState(Object)
  const { getOrder, AddOrder, UpdateOrder, listProduct, listOrder } = props
  const [isActive, setActive] = useState(1);



  const paginationConfig = {
    pageSize: 5, // Số lượng hàng trên mỗi trang
  };
  const handleChangeTypeTable = (type) => {
    setActive(type);
  };

  //add color   
  const handleAddOrder = (value) => {
    // AddProduct(value)
    openNotificationWithIcon('success', `Thêm ${objectName}`)
    setModalAdd(false);
  };
  // //update
  const handleUpdateOrder = (value) => {
    // console.log(value, "úp date màu sắc");
    // UpdateProduct(value)
    openNotificationWithIcon('success', `Sửa ${objectName}`)
    setModalUpdate(false)
  };
  // đóng modal
  const handleClose = () => {
    setModalAdd(false)
    setModalUpdate(false)
  };

  const checkUpdate = async (value) => {
    // console.log(value.id, "value update ");
    setDataRecord(value)
    setModalUpdate(true)
  }
  // thông báo
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, placement) => {
    api[type]({
      message: `${placement} thành công !`,
      // description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const order_columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id  ',
      width: '30px',
    },
    {
      title: 'Mã hóa đơn',
      dataIndex: 'order_code',
      key: 'order_code',
      width: '130px',
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'receiver_name',
      key: 'receiver_name',
      width: '220px',

    },
    {
      title: 'Số điện thoại',
      key: 'receiver_phone',
      dataIndex: 'receiver_phone',
      width: '130px',

    },
    {
      title: 'Mã nhân viên',
      dataIndex: ['employee','id'],
      key: 'employee_id',
      width: '120px',

    },
    {
      title: 'Trạng thái',
      dataIndex: ['order_status','order_status_name'],
      key: ['order_status','id'],
      width: '100px',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total_price',
      key: 'total_price',
      width: '95px',

    },
    {
      title: 'Hành động',
      key: 'action',
      width: '45px',

      render: (_, record) => (
        <Space size="middle">
          {/* <a style={{ color: "green" }}><FontAwesomeIcon icon={faEye} /></a> */}
          <a style={{ color: "blue" }}><FontAwesomeIcon icon={faPenToSquare} onClick={() => checkUpdate(record)}/></a>
          {/* <a style={{ color: "red" }}><FontAwesomeIcon icon={faTrash} /></a> */}
        </Space>
      ),
    },
  ];

  return (
    <Layout className="layout"
      style={{
        height: "100%"
      }}>

      <CommonHeader title={title} />
      <Content
        style={{
          padding: '50px',
        }}
      >
        <div className="site-layout-content">
          <div className='search-filter'
            style={{
              display: "flex",
              justifyContent: "space-between",
              // margin: "50px 0"
            }}>
            <div className='left'
              style={{
                width: "50%",
                // border: "1px solid black"
              }}>
              <Search
                placeholder="Nhập mã hóa đơn"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                style={{
                  width: "400px"
                }}
              />
              <Button type="primary" onClick={(e) => setModalAdd(true)} size='large'
                style={{
                  backgroundColor: "green",
                  display: "block",
                  margin: "20px 0"
                }}>
                Tạo hóa đơn<FontAwesomeIcon icon={faPlus} style={{ marginLeft: "10px" }} />
              </Button>
            </div>
          </div>

          <div
            style={{
              height: "100%"
            }}>
            {/* <Row>
              <Col
                span={4}
                key={DEFAULT_TYPE_TABLE.DANG_CHUAN_BI}
                style={{ textAlign: "center" }}
                className={`${classes["buttonType"]} ${isActive === DEFAULT_TYPE_TABLE.DANG_CHUAN_BI
                  ? classes["selected-button"]
                  : ""
                  }`}
                onClick={() => {
                  handleChangeTypeTable(DEFAULT_TYPE_TABLE.DANG_CHUAN_BI);
                }}
              >
                <p>Đang chuẩn bị</p>
              </Col>
              <Col
                span={4}
                key={DEFAULT_TYPE_TABLE.DANG_GIAO}
                style={{ textAlign: "center" }}
                className={`${classes["buttonType"]} ${isActive === DEFAULT_TYPE_TABLE.DANG_GIAO
                  ? classes["selected-button"]
                  : ""
                  }`}
                onClick={() => {
                  handleChangeTypeTable(DEFAULT_TYPE_TABLE.DANG_GIAO);
                }}
              >
                <p>Đang giao</p>
              </Col>
              <Col
                span={4}
                key={DEFAULT_TYPE_TABLE.HOAN_THANH}
                style={{ textAlign: "center" }}
                className={`${classes["buttonType"]} ${isActive === DEFAULT_TYPE_TABLE.HOAN_THANH
                  ? classes["selected-button"]
                  : ""
                  }`}
                onClick={() => {
                  handleChangeTypeTable(DEFAULT_TYPE_TABLE.HOAN_THANH);
                }}
              >
                <p>Hoàn thành</p>
              </Col>
              <Col
                span={4}
                key={DEFAULT_TYPE_TABLE.HUY}
                style={{ textAlign: "center" }}
                className={`${classes["buttonType"]} ${isActive === DEFAULT_TYPE_TABLE.HUY
                  ? classes["selected-button"]
                  : ""
                  }`}
                onClick={() => {
                  handleChangeTypeTable(DEFAULT_TYPE_TABLE.HUY);
                }}
              >
                <p>Huỷ</p>
              </Col>
         
            </Row> */}
            <Table columns={order_columns}
              dataSource={listOrder}
              pagination={paginationConfig}
            />
          </div>
          <OrderModalAdd
            {...props}
            isOpen={modalAdd}
            onConfirm={handleAddOrder}
            closeModal={handleClose}
          />
          <OrderModalUpdate
              isOpen={modalUpdate}
              onConfirm={handleUpdateOrder}
              closeModal={handleClose}
            />
          <Button type="primary" size='large'
            style={{
              backgroundColor: "orange",
              marginTop: "20px",
            }}>Xuất dữ liệu <FontAwesomeIcon icon={faFileExport} style={{ marginLeft: "10px" }} />
          </Button>
        </div>
      </Content>
      <CommonFooter />
    </Layout>
  );
};
export default OrderComponent;