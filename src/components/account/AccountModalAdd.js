import React, { useState } from 'react';
import { Form, Input, Modal, Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faFileSignature,
    faEnvelope,
    faLock
} from '@fortawesome/free-solid-svg-icons';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, RedoOutlined } from "@ant-design/icons";

const objectName = 'tài khoản'

export default function AccountModalAdd({ isOpen, closeModal, onConfirm }) {
    
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleOk = (e) => {
        onConfirm(e)
    };
    const handleCancel = () => {
        closeModal();
    };
    return (
        <Modal title={<h3 style={{
            marginTop: "-1px",
            marginBottom: "30px",
            fontWeight: "bold"
        }}>Thêm {objectName}</h3>}
            open={isOpen} onOk={''} onCancel={handleCancel}>
            <Form >
                <Row gutter={20}>
                    {/* email */}
                    <Col span={24}>
                        <Form.Item
                            label={<span style={{
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>Email</span>}
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "Please enter a valid email !",
                                },
                                {
                                    required: true,
                                    message: "Please enter your email !",
                                },
                            ]}

                        >
                            <Input size="large" allowClear prefix={<FontAwesomeIcon icon={faEnvelope} />} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Item>
                    </Col>
                    {/* user name */}
                    <Col span={24}>
                        <Form.Item
                            label={<span style={{
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>Username</span>}
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            name="userName"
                            rules={[
                                {
                                    type: "string",
                                    // message: "Please enter character from a - z and number from 0 - 9 without spaces and special symbols",
                                },
                                {
                                    required: true,
                                    message: "Please enter your user name !",
                                },
                            ]}
                        >
                            <Input size="large" allowClear prefix={<FontAwesomeIcon icon={faUser} />} placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
                        </Form.Item>
                    </Col>
                    {/* password */}
                    <Col span={24}>
                        <Form.Item
                            label={<span style={{
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>Password</span>}
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your password!",
                                },
                            ]}
                        >
                            <h4 style={{textAlign:"center"}}>Mật khẩu mặc định khi tạo tài khoản nhân viên là "<span style={{color:"green"}}>123456aA@</span>"</h4>
                            {/* <Input.Password size="large" allowClear prefix={<FontAwesomeIcon icon={faLock} />} placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> */}
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}
