import React, { useEffect, useState } from 'react';
import classes from "./Login.module.scss"
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faLock
} from '@fortawesome/free-solid-svg-icons';
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, RedoOutlined } from "@ant-design/icons";

export default function LoginComponent(props) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    // const [token] = useState(localStorage.getItem('token'));
    // const [roles] = useState(localStorage.getItem('role'));
    // useEffect(() => {},[token,roles])
    const history = useHistory();
    const handleLogin = async () => {
        await props.Login({
          userName: userName,
          password: password,
        });
      
        // Assuming that token and roles are updated after the Login function is resolved
        const { token, roles } = localStorage;
        console.log(token,roles)
        if (token && roles === 'ADMIN') {
          // Use React Router to navigate without full page reload
          window.location.reload();
        } else {
        //   history.push('/')
        }
      };
    return (
        <div id={classes["login"]}>
            {/* {contextHolder} */}
            <div className={classes["wrapper"]}>
                <div className={classes["content"]}>
                    <div className={classes["form"]}>
                        <p>Đăng nhập</p>
                        <div className={classes["signup"]}>
                            <p>Bạn chưa có tài khoản? <Link to={"/register"} className={classes["dangky"]}>Đăng ký ngay.</Link></p>
                        </div>
                        <Form>
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
                            <Form.Item style={{ display: "flex", justifyContent: "center" }} >
                                <Button size="large" type="primary" htmlType="submit" className={classes["submit"]} onClick={handleLogin}>
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}