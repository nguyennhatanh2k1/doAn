import React, { useState, useEffect } from 'react';
import CommonHeader from '../common/Header';
import CommonFooter from '../common/Footer';
// import { saveAs } from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faFilter,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';


import { Form, Menu, theme, Button, Layout, Space, Table, Tag, Input, Modal, Select, notification } from 'antd';
import "../../CustomUpload.css"
import CategoryModalAdd from './CategoryModalAdd';
import ModalDelete from "../common/ModalDelete";
import CategoryModalUpdate from './CategoryModalUpdate';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { TextArea } = Input;
// combo box
const objectName = 'danh mục'
const title = `Quản lý ${objectName}`



export default function CategoryComponent(props) {
const { data, getCategory, AddCategory, DeleteCategory, UpdateCategory } = props
  const [modalAdd, setModalAdd] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const [dataRecord, setDataRecord] = useState(Object)

  //add color   
  const handleAddCategory = (value) => {
    AddCategory(value)
    openNotificationWithIcon('success', `Thêm ${objectName}`)
    setModalAdd(false);

  };
  //delete
  const handleDeleteCategory = (value) => {

    DeleteCategory(value)
    openNotificationWithIcon('success', `Xóa ${objectName}`)
    setModalDelete(false)
  };
  //update
  const handleUpdateCategory = (value) => {
    console.log(value, "úp date category");
    UpdateCategory(value)
    openNotificationWithIcon('success', `Sửa ${objectName}`)
    setModalUpdate(false)
  };
  // đóng modal
  const handleClose = () => {
    setModalAdd(false)
    setModalDelete(false)
    setModalUpdate(false)
  };

  const checkUpdate = async (value) => {
    // console.log(value.id, "value update ");
    setDataRecord(value)
    setModalUpdate(true)
  }

  const check = (value) => {
    setDataRecord(value)
    setModalDelete(true)
  }



  // Số lượng hàng trên mỗi trang
  const paginationConfig = {
    pageSize: 5,
  };

  // hiện bộ lọc
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };
  // lọc

  // thông báo
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, placement) => {
    api[type]({
      message: `${placement} thành công !`,
      // description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  // tìm kiếm
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  // cột
  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: '30px',

    },
    {
      title: `Tên ${objectName}`,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Hành động',
      key: 'action',
      width: '95px',

      render: (_, record) => (
        <Space size="middle">
          {/* <a style={{ color: "green" }}><FontAwesomeIcon icon={faEye} /></a> */}
          <a style={{ color: "blue" }}><FontAwesomeIcon icon={faPenToSquare} onClick={() => checkUpdate(record)} /></a>
          <a style={{ color: "red" }}><FontAwesomeIcon icon={faTrash} onClick={() => check(record)} /></a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    // Gọi hàm để lấy dữ liệu khi component được mount
    getCategory();
  }, [getCategory]);

  return (

    <Layout className="layout"
      style={{
        height: "100%"
      }}>

      <CommonHeader title={title} />
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"

        >
          <div className='search-filter'
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "50px 0"
            }}>
            <div className='left'
              style={{
                width: "50%",
                // border: "1px solid black"
              }}>
              <Search
                placeholder={`Nhập tên ${objectName}`}
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                style={{
                  width: "400px"
                }}
              />
              <Button type="primary" onClick={() => setModalAdd(true)} size='large'
                style={{
                  backgroundColor: "green",
                  display: "block",
                  margin: "20px 0"
                }}>
                Thêm mới<FontAwesomeIcon icon={faPlus} style={{ marginLeft: "10px" }} />
              </Button>
              {contextHolder}
              <CategoryModalAdd
                isOpen={modalAdd}
                onConfirm={handleAddCategory}
                closeModal={handleClose}
              />
              <CategoryModalUpdate
                isOpen={modalUpdate}
                onConfirm={handleUpdateCategory}
                closeModal={handleClose}
                data={dataRecord}
              />
              <ModalDelete
                isOpen={modalDelete}
                onConfirm={handleDeleteCategory}
                closeModal={handleClose}
                data={dataRecord}
                objectName={objectName}
              />
            </div>
            <div className='right'
              style={{
                width: "50%",
                display: "none"
              }}
            >
              sắp xếp ở đây
            </div>
          </div>

          <div
            style={{
              height: "100%"
            }}>
            <Table columns={columns}
              dataSource={data}
              pagination={paginationConfig}
            />
          </div>
        </div>
      </Content>
      <CommonFooter />

    </Layout>
  );
};