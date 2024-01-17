import React, { useState } from 'react';
import { Form, Input, Modal, Col, Row } from 'antd';
const objectName = 'màu sắc'

export default function ColorModalAdd({ isOpen, closeModal, onConfirm }) {
    const { TextArea } = Input;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleOk = (e) => {

        onConfirm(e)
        setName("")
        setDescription("")
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

            open={isOpen}
            onOk={() => handleOk({
                name: name,
                description: description
            })} 
            destroyOnClose={true}
            onCancel={handleCancel}>
            <Form>
                {/* tên sp */}
                <Row>
                    <Col span={24}>
                        {/* tên màu sắc */}
                        <Form.Item
                            label={<span style={{
                                fontSize: "16px",
                                fontWeight: "bold"

                            }}>Tên {objectName}</span>}
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: `Vui lòng nhập tên ${objectName} !`,
                                },
                            ]}
                            labelCol={{
                                span: 24,

                            }}
                            wrapperCol={{
                                span: 24,

                            }}
                            labelAlign='left'
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Input destroyOnClose size="large" placeholder={`Nhập tên ${objectName}`}
                                onChange={(e) => { setName(e.target.value) }} />
                        </Form.Item>
                    </Col>
                </Row>
                {/* mô tả */}
                <Row>
                    <Col span={24}>
                        <Form.Item label={<span style={{
                            fontSize: "16px",
                            fontWeight: "bold"
                        }}>Mô tả</span>}
                            name="description"
                            labelCol={{
                                span: 24,
                            }}
                            labelAlign='left'
                            wrapperCol={{
                                span: 24,
                            }}>
                            <TextArea style={{resize:'none'}} rows={4} allowClear maxLength={400} showCount onChange={(e) => { setDescription(e.target.value) }} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        </Modal>
    )
}
