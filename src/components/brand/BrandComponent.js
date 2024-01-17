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
import BrandModalAdd from './BrandModalAdd';
import ModalDelete from "../common/ModalDelete";
import BrandModalUpdate from './BrandModalUpdate';
import { errorMessage } from "../../StringMessage"
import { useSelector } from 'react-redux'; 

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { TextArea } = Input;
// combo box
const objectName = 'thương hiệu'
const title = `Quản lý ${objectName}`



export default function BrandComponent(props) {
  console.log(props,'props ở brand component');
  const { data, getBrand, AddBrand, DeleteBrand, UpdateBrand } = props;

  const [modalAdd, setModalAdd] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [dataRecord, setDataRecord] = useState(Object)  
  const [page, setPage] = useState(1)  
  const [pageSize, setPageSize] = useState(10)


  //add color   

  const handleAddBrand = async (value) => { 
      await props.AddBrand(value)
      setModalAdd(false)
  };
  //delete
  const handleDeleteBrand = (value) => {
    props.DeleteBrand(value)
    setModalDelete(false)
  };
  //update
  const handleUpdateBrand = async (value) => {
    // console.log(value, "úp date thương hiệu");
      await props.UpdateBrand(value)
      setModalUpdate(false)

  };
  // đóng modal
  const handleClose = () => {
    setModalAdd(false)
    setModalDelete(false)
    setModalUpdate(false)

  };

  const checkUpdate = async (value) => {
    console.log(value.id, "value update ");
    setDataRecord(value)
    setModalUpdate(true)
  }

  const checkDelete = (value) => {
    setDataRecord(value)
    setModalDelete(true)
  }



  // Số lượng hàng trên mỗi trang


  const handlePageSizeChange = (value) => {
    // console.log(value);
    setPageSize(value);
  };

  // lọc

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
      dataIndex: "name",
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
          <a style={{ color: "red" }}><FontAwesomeIcon icon={faTrash} onClick={() => checkDelete(record)} /></a>
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
              <BrandModalAdd
                isOpen={modalAdd}
                onConfirm={handleAddBrand}
                closeModal={handleClose}
              />
                <ModalDelete 
                isOpen={modalDelete}
                onConfirm={handleDeleteBrand}
                closeModal={handleClose}
                data={dataRecord}
                objectName={objectName}
              />
              <BrandModalUpdate
                isOpen={modalUpdate}
                onConfirm={handleUpdateBrand}
                closeModal={handleClose}
                data={dataRecord}

              />
            </div>
            <div className='right'
              style={{
                width: "50%",
                display: "none"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  // border: "red 2px solid"
                }}>
                sắp xếp ở đây
              </div>
            </div>
          </div>

          <div
            style={{
              height: "100%"
            }}>
            <Table columns={columns}
              dataSource={props.data}
              pagination={{
                pageSize: 5,
                defaultCurrent:1,
                onChange: handlePageSizeChange,
              }}
            />
          </div>
        </div>
      </Content>
      <CommonFooter />

    </Layout>
  );
};