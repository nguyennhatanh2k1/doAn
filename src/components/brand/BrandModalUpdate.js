import React, { useState } from 'react';
import { Form, Input, Modal, Col, Row } from 'antd';
import { useEffect } from 'react';
const objectName = 'thương hiệu'

export default function BrandModalUpdate({ isOpen, closeModal, onConfirm, data, }) {
    const { TextArea } = Input
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    // console.log(data.id, "object");
    useEffect(() => {
        setName(data.name);
        setDescription(data.description);
    }, [data])
    const handleOk = (data) => {
        onConfirm(data)
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
        }}>Sửa {objectName}</h3>}

            open={isOpen}
            onOk={() => handleOk({
                id: data.id,
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

                            }}>Tên màu sắc</span>}
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên màu sắc !',
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
                            <Input size="large" placeholder="Nhập tên màu sắc"
                                onChange={(e) => { setName(e.target.value) }} defaultValue={name} />
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
                            <TextArea style={{resize:'none'}} rows={4} allowClear maxLength={400} showCount onChange={(e) => { setDescription(e.target.value) }} defaultValue={description} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        </Modal>
    )
}
