import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
import CommonHeader from '../common/Header';
import CommonFooter from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faFilter,
  faEye,
  faPenToSquare,
  faTrash,
  faFileExport
} from '@fortawesome/free-solid-svg-icons';
import { Form, Menu, theme, Button, Layout, Space, Table, Tag, Input, Modal, Select, notification } from 'antd';
import "../../CustomUpload.css"

import ProductModalGet from './ProductModalGet';
import ProductModalAdd from './ProductModalAdd';
import ModalDelete from "../common/ModalDelete";
import ProductModalUpdate from './ProductModalUpdate';
const { Content, } = Layout;
const { Search } = Input;
const { TextArea } = Input;


const objectName = 'sản phẩm'
const title = `Quản lý ${objectName}`




// { data, getProduct, AddProduct, DeleteProduct, UpdateProduct }
//select categories
const ProductComponent = (props) => {
  const { getProduct, getSelection, AddProduct, UpdateProduct, DeleteProduct, listProduct, listCategory, listBrand, listColor, listSize } = props

  const [modalGet, setModalGet] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [dataModalGet, setDataModalGet] = useState({});


  const [dataRecord, setDataRecord] = useState(Object)


  //
  let product_category = [];
  if (listCategory) {
    product_category = listCategory.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
  }
  //
  let product_brand = [];
  if (listBrand) {
    product_brand = listBrand.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
  }
  let product_color = [];
  if (listColor) {
    product_color = listColor.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
  }

  //add color   
  const handleAddProduct = (value) => {
    console.log(value, "value")
    AddProduct(value);
    openNotificationWithIcon('success', `Thêm ${objectName}`)
    setModalAdd(false);

  };
  //delete
  const handleDeleteProduct = (value) => {
    DeleteProduct(value)
    openNotificationWithIcon('success', `Xóa ${objectName}`)
    setModalDelete(false)
  };
  // //update
  const handleUpdateProduct = (value) => {

    UpdateProduct(value)
    openNotificationWithIcon('success', `Sửa ${objectName}`)
    setModalUpdate(false)
  };
  // đóng modal
  const handleClose = () => {
    setModalGet(false)
    setModalAdd(false)
    setModalDelete(false)
    setModalUpdate(false)
  };

  const checkGet = async (value) => {

    setDataModalGet({
      name: value.product_name,
      categoryId: value.category.id,
      brandId: value.brand.id,
      colorId: value.color.id,
      sizeId: value.size.id,
      quantity: value.quantity,
      importPrice: value.import_price,
      exportPrice: value.export_price,
      description: value.product_description,
      imgUrl: value.image_url
    })
    setModalGet(true)
  }
  const checkUpdate = async (value) => {
    console.log(value.id, "value update ");
    setDataModalGet({
      id: value.id,
      name: value.product_name,
      categoryId: value.category.id,
      brandId: value.brand.id,
      colorId: value.color.id,
      sizeId: value.size.id,
      quantity: value.quantity,
      importPrice: value.import_price,
      exportPrice: value.export_price,
      description: value.product_description,
      imgUrl: value.image_url
    })
    getSelection()
    // setDataRecord(value)
    setModalUpdate(true)
  }

  const checkDelete = (value) => {
    setDataRecord(value)
    setModalDelete(true)
  }

  // thông báo
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, placement) => {
    api[type]({
      message: `${placement} thành công !`,
      // description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  // ẩn/hiện lọc
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };
  // tìm kiếm
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const paginationConfig = {
    pageSize: 5, // Số lượng hàng trên mỗi trang
  };
  //cột
  const product_columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id  ',
      width: '30px',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'product_name',
      key: 'product_name',
      // alignTitle: 'center',
    },
    {
      title: 'Danh mục',
      key: 'category',
      width: "250px",
      dataIndex: ['category', 'name'],

      // render: (text, record) => {
      //   const categories = record.category.map(category => category.name);
      //   return categories.join(', ');
      // },
    },
    {
      title: 'Thương hiệu',
      key: 'brand',
      dataIndex: ['brand', 'name'],
      width: "150px"
    },
    {
      title: 'Màu sắc',
      key: 'color',
      dataIndex: ['color', 'name'],
      width: "100px"
    },
    {
      title: 'Size',
      key: 'size',
      dataIndex: ['size', 'size_number'],
      width: "50px"
    },
    {
      title: 'Giá bán',
      dataIndex: 'export_price',
      key: 'export_price',
      width: "150px"
    },
    {
      title: 'Trạng thái',
      dataIndex: 'quantity',
      key: 'quantity',
      width: "120px",
      render: (text, record) => {
        let displayText = '';
        let color = '';

        if (record.quantity === 0) {
          displayText = 'Hết hàng';
          color = 'red';
        } else if (record.quantity <= 3) {
          displayText = 'Sắp hết hàng';
          color = 'orange'; // hoặc màu cam
        } else {
          displayText = 'Còn hàng';
          color = 'green';
        }

        return <span style={{ color }}>{displayText}</span>;
      },
    },
    {
      title: 'Hành động',
      key: 'action',
      width: '70px',
      render: (_, record) => (
        <Space size="middle">
          <a style={{ color: "green" }}><FontAwesomeIcon icon={faEye} onClick={() => checkGet(record)} /></a>
          <a style={{ color: "blue" }}><FontAwesomeIcon icon={faPenToSquare} onClick={() => checkUpdate(record)} /></a>
          <a style={{ color: "red" }}><FontAwesomeIcon icon={faTrash} onClick={() => checkDelete(record)} /></a>
        </Space>
      ),
    },
  ];

  const product_status = [
    { value: '1', label: 'Hết hàng' },
    { value: '2', label: 'Sắp hết hàng' },
    { value: '3', label: 'Còn hàng' },
  ]
  return (
    <Layout className="layout"
      style={{
        height: "100%",
      }}>
      <CommonHeader title={title} />
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content" >
          <div className='search-filter'
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "50px 0",
              // position: "relative"  
            }}>
            <div className='left'
              style={{
                // width: "50%",
                // border: "1px solid black"
              }}>
              <Search placeholder="Nhập tên sản phẩm" allowClear enterButton="Search" size="large" onSearch={onSearch}
                style={{
                  width: "460px",
                  marginBottom: "20px",
                }}
              />
              <Button type="primary" onClick={() => {
                setModalAdd(true)
                getSelection()
              }} size='large'
                style={{
                  backgroundColor: "green",
                  display: "block",
                }}
              >
                Thêm mới<FontAwesomeIcon icon={faPlus} style={{ marginLeft: "10px" }} />
              </Button>
            </div>
            <div className='right'
              style={{
                width: "100%",
                // border: "red 2px solid"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  // border: "green 2px solid",
                  margin: "0"
                }}>
                {/* lọc */}
                <Button type="primary"
                  size='large'
                  style={{
                    backgroundColor: "blue",
                    margin: "0 0 20px 0",
                  }}
                >
                  <label>
                    <input type="checkbox" checked={isButtonVisible} onChange={toggleButtonVisibility}
                      style={{
                        display: "none"
                      }}
                    />
                    <strong style={{
                      // fontSize: "24px",
                      // border: "red 2px solid"
                    }}><FontAwesomeIcon icon={faFilter}
                      style={{
                        marginRight: "5px",
                      }} />Lọc</strong>
                  </label>
                </Button>
              </div>
              {/* hiện bộ lọc */}
              {isButtonVisible && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    // border: "red 2px solid"
                  }}>
                  <Select options={product_category}
                    mode="multiple"
                    allowClear
                    placeholder="Chọn danh mục"
                    style={{
                      // width: "100%",
                      minWidth: "200px",
                      maxWidth: "350px",
                      border: "grey 2px solid",
                      borderRadius: "8px",
                    }}
                  // onChange={handleChange}                
                  />
                  <Select
                    defaultValue="Chọn thương hiệu" options={product_brand} size='large'
                    style={{
                      minWidth: "200px",
                      maxWidth: "200px",
                      marginLeft: "16px",
                      border: "grey 2px solid",
                      borderRadius: "8px",
                    }}
                  // onChange={handleChange}                
                  />
                  <Select
                    defaultValue="Chọn màu sắc" options={product_color} size='large'
                    style={{
                      minWidth: "150px",
                      maxWidth: "150px",
                      marginLeft: "16px",
                      border: "grey 2px solid",
                      borderRadius: "8px",
                    }}
                  // onChange={handleChange}                
                  />
                  <Select defaultValue="Chọn trạng thái" size='large' options={product_status}
                    // onChange={handleChange} 
                    style={{
                      minWidth: "170px",
                      maxWidth: "170px",
                      marginLeft: "16px",
                      border: "grey 2px solid",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )}
            </div>
            {contextHolder}
            <ProductModalGet
              {...props}
              isOpen={modalGet}
              onConfirm={handleClose}
              closeModal={handleClose}
              dataModalGet={dataModalGet}
            />
            <ProductModalAdd
              {...props}
              isOpen={modalAdd}
              onConfirm={handleAddProduct}
              closeModal={handleClose}
            />
            <ProductModalUpdate
              {...props}
              isOpen={modalUpdate}
              onConfirm={handleUpdateProduct}
              closeModal={handleClose}
              dataModalGet={dataModalGet}
            />
            <ModalDelete
              isOpen={modalDelete}
              onConfirm={handleDeleteProduct}
              closeModal={handleClose}
              data={dataRecord}
              objectName={objectName}
            />
          </div>
          <div className=''
            style={{
              height: "100%",
              color: "#fff"
            }}>
            <Table columns={product_columns} dataSource={listProduct} pagination={paginationConfig} />

          </div>
          <Button type="primary" size='large'
            style={{
              backgroundColor: "orange",
              marginTop: "20px"
            }}>Xuất dữ liệu <FontAwesomeIcon icon={faFileExport} style={{ marginLeft: "10px", color: "#fff" }} onClick={''} />
          </Button>
        </div>
      </Content>
      <CommonFooter />
    </Layout>
  );
};
export default ProductComponent;