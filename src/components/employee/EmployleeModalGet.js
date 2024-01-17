import React, { useState } from 'react';
import { Form, Input, Modal, Col, Row, Select, InputNumber, Upload, DatePicker } from 'antd';
import ImgCrop from 'antd-img-crop';


const objectName = 'nhân viên'

// // dữ liệu modal ảo
// const category = [
//     { value: 'Giày thể thao', label: 'Giày thể thao' },
//     { value: 'Giày thời trang', label: 'Giày thời trang' },
//     { value: 'Giày bệt', label: 'Giày bệt' },
// ]

// const product_brand = [
//     { value: 'Nike', label: 'Nike' },
//     { value: 'Adidas', label: 'Adidas' },
//     { value: 'MLB', label: 'MLB' },
// ]
// const product_color = [
//     { value: 'Trắng', label: 'Trắng' },
//     { value: 'Đen', label: 'Đen' },
//     { value: 'Xanh lá', label: 'Xanh lá' },
//     { value: 'Đỏ', label: 'Đỏ' },
// ]
// const product_size = [
//     { value: '35', label: '35' },
//     { value: '36', label: '36' },
//     { value: '37', label: '37' },
//     { value: '38', label: '38' },
//     { value: '39', label: '39' },
//     { value: '40', label: '40' },
//     { value: '41', label: '41' },
//     { value: '42', label: '42' },
//     { value: '43', label: '43' },
// ]

export default function EmployeeModalGet({ isOpen, closeModal, onConfirm }) {
    const { TextArea } = Input;

    // const [name, setName] = useState('');
    // const [category, setCategory] = useState('');
    // const [brand, setBrand] = useState('');
    // const [importPrice, setImportPrice] = useState('');
    // const [exportPrice, setExportPrice] = useState('');
    // const [description, setDescription] = useState('');
    // const [imgUrl, setUrlImg] = useState('');

    // const handleOk = (e) => {
    //     onConfirm(e)
    // };
    const handleCancel = () => {
        closeModal();
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    //đổi ngày vào làm
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    // upload ảnh
    const [fileList, setFileList] = useState([]);
    const changeImage = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const previewImage = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <Modal
            style={{
                marginLeft: "260px",
                marginRight: "20px",
                marginBottom: "-20px",
                marginTop: "-17px",
                // backgroundColor:"red",
            }}
            width={"100"}
            height={"100"}
            title={<h3 style={{
                marginTop: "-2px",
                marginBottom: "30px",
                fontWeight: "bold"
            }}>Xem chi tiết {objectName}</h3>} open={isOpen} onCancel={handleCancel}
            onOk={handleCancel} >
            <Form
            disabled={true}
            >
                <Row gutter={20}>
                    <Col span={15}
                        style={{
                            // padding:"0 20px",
                            // margin:"0 -20px"
                        }}>
                        {/* tên sp */}
                        <Row gutter={20}>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                }}>
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
                                    <Input allowClear size='large' placeholder={`Nhập tên ${objectName}`}
                                    // defaultValue={['a10', 'c12']}
                                    //   onChange={handleChange} 
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                    // border: '1px solid green',
                                }}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Tài khoản</span>}
                                    name="account"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn 1 tài khoản !',
                                        },
                                    ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}  >
                                    <Select
                                        placeholder="Chọn tài khoản"
                                        // defaultValue={['a10', 'c12']}
                                        //   onChange={handleChange}
                                        style={{
                                            width: '100%',
                                        }}
                                        size='large'
                                        options={''}>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }}>Email</span>}
                                    name="email"
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
                                    <Input allowClear size='large' placeholder={`Nhập email`}
                                    // defaultValue={['a10', 'c12']}
                                    //   onChange={handleChange} 
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }}>Địa chỉ</span>}
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Vui lòng nhập chi tiết địa chỉ !`,
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
                                    <Input allowClear size='large' placeholder={`Nhập chi tiết địa chỉ`}
                                    // defaultValue={['a10', 'c12']}
                                    //   onChange={handleChange} 
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                    // border: '1px solid green',
                                }}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Số điện thoại</span>}
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập số điện thoại !',
                                        },
                                    ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign="top"
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Input allowClear size='large' placeholder={`Nhập số điện thoại`}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                    // border: '1px solid green',
                                }}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Trạng thái</span>}
                                    name="employee_status"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn 1 trạng thái !',
                                        },
                                    ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}  >
                                    <Select
                                        placeholder="Chọn trạng thái"
                                        // defaultValue={['a10', 'c12']}
                                        //   onChange={handleChange}
                                        style={{
                                            width: '100%',
                                        }}
                                        size='large'
                                        options={''}>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                    // border: '1px solid green',
                                }}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Ngày bắt đầu làm</span>}
                                    name="brand"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn ngày bắt đầu !',
                                        },
                                    ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}  >
                                    <DatePicker onChange={onChange}
                                        placeholder="Chọn ngày bắt đầu làm"
                                        style={{
                                            width: '100%',
                                        }}
                                        size='large'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                    // border: '1px solid green',
                                }}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    width: '100%',

                                }}>Tổng lương</span>}
                                    name="total_salary"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập tổng lương dưới dạng số !',
                                        },
                                    ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}>

                                    <Input allowClear size='large' placeholder="Nhập tổng lương dạng số "
                                    // defaultValue={['a10', 'c12']}
                                    //   onChange={handleChange} 
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Mô tả</span>}
                                    name="description"
                                    // rules={[
                                    //   {
                                    //     required: true,
                                    //     message: 'Vui lòng chọn tối thiểu 1 danh mục !',
                                    //   },
                                    // ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}>
                                    <TextArea rows={4} allowClear maxLength={2000} showCount style={{ resize: 'none', fontSize: "16px" }} placeholder='Nhập mô tả...' />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={9}
                        style={{
                            padding: "0 20px",
                            // margin:"0 -20px",
                            // border:"1px solid #ccc",
                        }}>
                        <Form.Item
                            label={<span style={{
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>Ảnh {objectName}</span>}
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng chọn tối thiểu 1 ảnh !',
                                },
                            ]}
                            labelCol={{ span: 24, }}
                            labelAlign='left'
                            wrapperCol={{ span: 24, }}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <ImgCrop rotationSlider>
                                <Upload
                                    className='custom-upload'
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={changeImage}
                                    onPreview={previewImage}
                                >
                                    {fileList.length < 1 && '+ Upload'}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}
