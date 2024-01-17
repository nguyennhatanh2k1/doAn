import React, { useState } from 'react';
import CommonHeader from '../common/Header';
import CommonFooter from '../common/Footer';
import AccountModalAdd from './AccountModalAdd';
import AccountModalDelete from './AccountModalDelete';
import AccountModalUpdate from './AccountModalUpdate'; 
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
    faFileSignature,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Button, Col, DatePicker, Form, Input, Row, Select, Layout, Space, Table, Tag, Modal,notification } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, RedoOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Search } = Input;

const objectName = 'tài khoản'
const title = `Quản lý ${objectName}`



const AccountComponent = (props) => {
const { getAccount, AddAccount, DeleteAccount, UpdateAccount,listAccount } = props
    const [modalAdd, setModalAdd] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [dataRecord, setDataRecord] = useState(Object)

    //add color   
    // const handleAddAccount = (value) => {
    //     AddAccount(value)
    //     openNotificationWithIcon('success', `Thêm ${objectName}`)
    //     setModalAdd(false);

    // };
    //delete
    const handleDeleteAccount = (value) => {
        // DeleteAccount(value)
        openNotificationWithIcon('success', `Xóa ${objectName}`)
        setModalDelete(false)
    };
    // update
    const handleUpdateAccount = (value) => {
        console.log(value, "úp date thương hiệu");
        // UpdateAccount(value)
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
        console.log(value.id, "value update ");
        setDataRecord(value)
        setModalUpdate(true)
    }

    const check = (value) => {
        setDataRecord(value)
        setModalDelete(true)
    }

    const handleRegister = () => {
        // props.Register({
        //     userName: userName, 
        //     password: password, 
        //     fullName: fullName,
        //     email: email
        // })
        openNotificationWithIcon('success', `Thêm ${objectName}`)
        setModalAdd(false);
    }
    const paginationConfig = {
        pageSize: 5, // Số lượng hàng trên mỗi trang
    };

    // thông báo
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, placement) => {
        api[type]({
            message: `${placement} thành công !`,
            // description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };
    //tìm kiếm
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    //tiêu đề
    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            width: '30px',
    
        },
        {
            title: 'Tên tài khoản',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isActive',
            key: 'isActive',
        },
        {
            title: 'Phân quyền',
            dataIndex: 'role',
            key: 'role',
            width: '120px',

        },
        {
            title: 'Hành động',
            key: 'action',
            width: '95px',
            render: (_, record) => (
                <Space size="middle">
                {/* <a style={{ color: "green" }}><FontAwesomeIcon icon={faEye} /></a> */}
                <a style={{ color: "blue" }}><FontAwesomeIcon icon={faPenToSquare} onClick={checkUpdate} /></a>
                <a style={{ color: "red" }}><FontAwesomeIcon icon={faTrash} onClick={()=>setModalDelete(true)}/></a>
            </Space>
            ),
        },
    ];
    //dữ liệu ảo
    const data_fake = [
        {
            "id": 1,
            "name": "Admin User",
            "email": "admin@example.com",
            "fullName": "adminfullName",
            "role": "admin"
        },
        {
            "id": 2,
            "name": "Employee User 1",
            "email": "employee1@example.com",
            "fullName": "employeefullName1",
            "role": "employee"
        },
        {
            "id": 3,
            "name": "Employee User 2",
            "email": "employee2@example.com",
            "fullName": "employeefullName2",
            "role": "employee"
        }
    ]
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
                <div className="site-layout-content" >
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
                            <Search placeholder="Nhập tên tài khoản" allowClear enterButton="Search" size="large"
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
                                Thêm mới<FontAwesomeIcon icon={faPlus} style={{ marginLeft: "10px" }}/>
                            </Button>

                        </div>
                        <div className='right'
                            style={{
                                width: "50%",
                                display: "none"
                            }}
                        >
                            bên phải ở đây
                        </div>
                    </div>
                    {contextHolder}
                    <AccountModalAdd
                        isOpen={modalAdd}
                        onConfirm={handleRegister}
                        closeModal={handleClose}
                    />
                    <AccountModalDelete
                        isOpen={modalDelete}
                        onConfirm={handleDeleteAccount}
                        closeModal={handleClose}
                        data={dataRecord}
                    />
                    <AccountModalUpdate
                isOpen={modalUpdate}
                onConfirm={handleUpdateAccount}
                closeModal={handleClose}
                data={dataRecord}
                />
                    <div
                        style={{
                            height: "100%"
                        }}>
                        <Table columns={columns}
                            dataSource={listAccount}
                            pagination={paginationConfig}
                        />

                    </div>
                    <Button type="primary" size='large'
                        style={{
                            backgroundColor: "orange",
                            display: "none"
                        }}>Xuất dữ liệu <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
                    </Button>
                </div>
            </Content>
            <CommonFooter />

        </Layout>
    );
};
export default AccountComponent;