import React, { useState } from 'react';
import CommonHeader from '../common/Header';
import CommonFooter from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faClipboardList,
  faUser,
  faShoePrints,
  faPlus,
  faArrowRight,
  faFilter,
  faEye,
  faPenToSquare,
  faTrash,
  faFileExport
} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt, faShopify } from '@fortawesome/free-brands-svg-icons';
import ImgCrop from 'antd-img-crop';
import { Upload, DatePicker, InputNumber, Col, Row } from 'antd';
import { Form, Menu, theme, Button, Layout, Space, Table, Tag, Input, Modal, Select, notification } from 'antd';
import "../../CustomUpload.css"
import EmployeeModalGet from './EmployleeModalGet';
import EmployeeModalAdd from './EmployeeModalAdd';
import ModalDelete from "../common/ModalDelete";
import EmployeeModalUpdate from './EmployeeModalUpdate';
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { TextArea } = Input;

// combo box
const objectName = 'nhân viên'
const title = `Quản lý ${objectName}`



const EmployeeComponent = (props) => {
  const { getEmployee, AddEmployee, DeleteEmployee, UpdateEmployee, listEmployee, listEmplStatus } = props;
  const [modalGet, setModalGet] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const [dataRecord, setDataRecord] = useState(Object)


  //add  
  const handleAddEmployee = (value) => {
    // AddProduct(value)
    openNotificationWithIcon('success', `Thêm ${objectName}`)
    setModalAdd(false);

  };
  //delete
  const handleDeleteEmployee = (value) => {
    // DeleteProduct(value)
    openNotificationWithIcon('success', `Xóa ${objectName}`)
    setModalDelete(false)
  };
  // //update
  const handleUpdateEmployee = (value) => {
    // console.log(value, "úp date màu sắc");
    // UpdateProduct(value)
    openNotificationWithIcon('success', `Sửa ${objectName}`)
    setModalUpdate(false)
  };
  // đóng modal
  const handleClose = () => {
    setModalGet(false);
    setModalAdd(false)
    setModalDelete(false)
    setModalUpdate(false)
  };

  const checkUpdate = async (value) => {
    // console.log(value.id, "value update ");
    setDataRecord(value)
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

  //size
  const [size, setSize] = useState('large');
  // số lượng
  const [value, setValue] = useState('99');

  const paginationConfig = {
    pageSize: 5, // Số lượng hàng trên mỗi trang
  };
  const rowStyle = {
    height: '50px', // Chiều cao của mỗi hàng
  };

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id  ',
      width: '30px',

    },
    {
      title: 'Tên nhân viên',
      dataIndex: 'employeeName',
      key: 'employeeName',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Địa chỉ',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tổng lương',
      dataIndex: 'total_salary',
      key: 'total_salary',
    },
    {
      title: 'Trạng thái',
      dataIndex: ['empl_status', 'empl_status_name'],
      key: 'empl_status_name',
    },
    {
      title: 'Hành động',
      key: 'action',
      width: '95px',

      render: (_, record) => (
        <Space size="middle">
          <a style={{ color: "green" }} onClick={() => setModalGet(true)}><FontAwesomeIcon icon={faEye} /></a>
          <a style={{ color: "blue" }} onClick={() => setModalUpdate(true)}><FontAwesomeIcon icon={faPenToSquare} /></a>
          <a style={{ color: "red" }} onClick={() => setModalDelete(true)}><FontAwesomeIcon icon={faTrash} /></a>
        </Space>
      ),
    },
  ];
  // const data = [
  //   {
  //     "id": 1,
  //     "name": "Nguyễn Văn An",
  //     "phone": "0123-456-789",
  //     "address": "123 Đường ABC, Quận XYZ, Thành phố HCM",
  //     "email": "an.nguyen@example.com",
  //     "salary": 12000000,
  //     "status": "Đang làm việc"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Trần Thị Bình",
  //     "phone": "0987-654-321",
  //     "address": "456 Đường DEF, Quận LMN, Thành phố Hà Nội",
  //     "email": "binh.tran@example.com",
  //     "salary": 10000000,
  //     "status": "Đang làm việc"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Lê Văn Cường",
  //     "phone": "0111-222-333",
  //     "address": "789 Đường GHI, Quận OPQ, Thành phố Đà Nẵng",
  //     "email": "cuong.le@example.com",
  //     "salary": 9000000,
  //     "status": "Tạm nghỉ"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Phạm Thị Dung",
  //     "phone": "0333-444-555",
  //     "address": "1010 Đường KLM, Quận RST, Thành phố Cần Thơ",
  //     "email": "dung.pham@example.com",
  //     "salary": 11000000,
  //     "status": "Đang làm việc"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Hoàng Văn Đức",
  //     "phone": "0666-777-888",
  //     "address": "1212 Đường UVW, Quận XYZ, Thành phố HCM",
  //     "email": "duc.hoang@example.com",
  //     "salary": 9500000,
  //     "status": "Đang làm việc"
  //   },
  //   {
  //     "id": 6,
  //     "name": "Mai Thị Em",
  //     "phone": "0999-000-111",
  //     "address": "1414 Đường XYZ, Quận ABC, Thành phố Hà Nội",
  //     "email": "em.mai@example.com",
  //     "salary": 8500000,
  //     "status": "Nghỉ việc"
  //   },
  //   {
  //     "id": 7,
  //     "name": "Vũ Thị Hương",
  //     "phone": "0222-333-444",
  //     "address": "1616 Đường DEF, Quận LMN, Thành phố Đà Nẵng",
  //     "email": "huong.vu@example.com",
  //     "salary": 10500000,
  //     "status": "Đang làm việc"
  //   },
  //   {
  //     "id": 8,
  //     "name": "Đinh Văn Khánh",
  //     "phone": "0555-666-777",
  //     "address": "1818 Đường GHI, Quận OPQ, Thành phố Cần Thơ",
  //     "email": "khanh.dinh@example.com",
  //     "salary": 9800000,
  //     "status": "Đang làm việc"
  //   },
  //   {
  //     "id": 9,
  //     "name": "Lâm Thị Lan",
  //     "phone": "0888-999-000",
  //     "address": "2020 Đường KLM, Quận RST, Thành phố Hà Nội",
  //     "email": "lan.lam@example.com",
  //     "salary": 8700000,
  //     "status": "Tạm nghỉ"
  //   },
  //   {
  //     "id": 10,
  //     "name": "Ngô Văn Minh",
  //     "phone": "0777-888-999",
  //     "address": "2222 Đường UVW, Quận XYZ, Thành phố Đà Nẵng",
  //     "email": "minh.ngo@example.com",
  //     "salary": 11500000,
  //     "status": "Đang làm việc"
  //   },
  //   {
  //     "id": 11,
  //     "name": "Bùi Thị Ngọc",
  //     "phone": "0444-555-666",
  //     "address": "2424 Đường ABC, Quận LMN, Thành phố Cần Thơ",
  //     "email": "ngoc.bui@example.com",
  //     "salary": 9300000,
  //     "status": "Đang làm việc"
  //   }
  // ]
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
                placeholder="Nhập tên nhân viên"
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
              <EmployeeModalGet
                isOpen={modalGet}
                closeModal={handleClose}
              />
              <EmployeeModalAdd
                isOpen={modalAdd}
                onConfirm={handleAddEmployee}
                closeModal={handleClose}
              />
              <EmployeeModalUpdate
                isOpen={modalUpdate}
                onConfirm={handleUpdateEmployee}
                closeModal={handleClose}
              />
              <ModalDelete
                isOpen={modalDelete}
                onConfirm={handleDeleteEmployee}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  // border: "red 2px solid"
                }}>

                <label
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    // border: "green 2px solid"
                  }}>
                  <input
                    type="checkbox"
                    checked={isButtonVisible}
                    onChange={toggleButtonVisibility}
                    style={{
                      display: "none"
                    }}
                  />
                  <strong style={{
                    fontSize: "20px",
                    // border: "red 2px solid"
                  }}><FontAwesomeIcon icon={faFilter}
                    style={{
                      marginRight: "5px",

                    }} /> Lọc </strong>
                </label>
              </div>


              {isButtonVisible && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "20px 0",
                    // border: "red 2px solid"
                  }}>
                  <Select
                    defaultValue="Chọn danh mục"
                    style={{
                      width: "200",
                    }}
                    size='large'
                    // onChange={handleChange}                
                    options={[
                      { value: 'jack', label: 'Giày thể thao' },
                      { value: 'lucy', label: 'Giày thời trang' },
                      { value: 'Yiminghe', label: 'Giày bệt' },
                    ]}

                  />
                  <Select
                    defaultValue="Chọn thương hiệu"
                    style={{
                      width: 200, marginLeft: "16px"
                    }}
                    size='large'
                    // onChange={handleChange}                
                    options={[
                      { value: 'jack', label: 'Nike' },
                      { value: 'lucy', label: 'Adidas' },
                      { value: 'Yiminghe', label: 'MLB' },
                    ]}

                  />
                  <Select
                    defaultValue="Chọn giá"
                    style={{
                      width: 200, marginLeft: "16px"
                    }}
                    size='large'
                    // onChange={handleChange}                
                    options={[
                      { value: '1', label: 'Dưới 500k' },
                      { value: '2', label: 'Từ 500k - 1 triệu' },
                      { value: '3', label: 'Từ 1 triệu - 2 triệu' },
                      { value: '4', label: 'Trên 2 triệu' },
                    ]}

                  />
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              height: "100%"
            }}>
            <Table columns={columns}
              dataSource={listEmployee}
              pagination={paginationConfig}
            />

          </div>
          <Button type="primary" size='large'
            style={{
              backgroundColor: "orange",
              display: "none"
            }}>Xuất dữ liệu <FontAwesomeIcon icon={faFileExport} style={{ marginLeft: "10px" }} />
          </Button>
        </div>
      </Content>
      <CommonFooter />

    </Layout>
  );
};
export default EmployeeComponent;