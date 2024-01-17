import React, { useState } from 'react';
import classes from "./Register.module.scss"
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileSignature,
    faEnvelope,
    faUser,
    faLock
} from '@fortawesome/free-solid-svg-icons';
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, RedoOutlined } from "@ant-design/icons";


 export default function RegisterComponent(props) {
    // const [size, setSize] = useState('large');
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const handleRegister = () => {
        props.Register({
            userName: userName, 
            password: password, 
            email: email
        })
        history.push('/')
    }
    // const { Option } = Select;
    return (
        <div id={classes["register"]}>
            <div className={classes["wrapper"]}>
                <div className={classes["content"]}>
                    <div className={classes["form"]}>
                        <p>Đăng ký</p>
                        <div className={classes["signin"]}>
                            <p>Bạn đã có tài khoản? <Link style={{ marginLeft: "20px" }} to={"/"} className={classes["dangnhap"]}>Đăng nhập ngay.</Link></p>
                        </div>
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
                                        <Input.Password size="large" allowClear prefix={<FontAwesomeIcon icon={faLock} />} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item style={{ display: "flex", justifyContent: "center" }} >
                                <Button type="primary" size='large' htmlType="submit" className={classes["submit"]} onClick={handleRegister}>
                                    Đăng ký
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

