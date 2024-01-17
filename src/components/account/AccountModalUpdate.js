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

export default function AccountModalUpdate({ isOpen, closeModal, onConfirm }) {
    
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
        }}>Sửa {objectName}</h3>}
            open={isOpen} onOk={''} onCancel={handleCancel}>
            <Form >
                <Row gutter={20}>
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
                                    message: "Vui lòng nhập email hợp lệ !",
                                },
                                {
                                    required: true,
                                    message: "Vui lòng nhập email !",
                                },
                            ]}

                        >
                            <Input size="large" allowClear prefix={<FontAwesomeIcon icon={faEnvelope} />} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Item>
                    </Col>
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
                                    message: "Vui lòng nhập Username !",
                                },
                            ]}
                        >
                            <Input size="large" allowClear prefix={<FontAwesomeIcon icon={faUser} />} placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label={<span style={{
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>Mật khẩu</span>}
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
                                    message: "Vui lòng nhập mật khẩu ",
                                },
                            ]}
                        >
                            <Input.Password size="large" allowClear prefix={<FontAwesomeIcon icon={faLock} />} placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label={<span style={{
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>Nhập lại mật khẩu</span>}
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            name="new_password"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: "Vui lòng nhập lại mật khẩu !",
                            //     },
                            // ]}
                        >
                            <Input.Password  value={''} size="large" allowClear prefix={<FontAwesomeIcon icon={faLock} />} placeholder="Nhập lại" onChange={(e) => setPassword(e.target.value)} 
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}
