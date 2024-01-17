import React, { useState, useEffect } from 'react';
import { Form, Input, Modal, Col, Row, Select, InputNumber, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
const { TextArea } = Input;
const objectName = 'sản phẩm'

export default function ProductModalGet(props) {
    const { isOpen, closeModal, onConfirm, listCategory, listBrand, listColor, listSize, listProduct } = props;
    const { dataModalGet } = props


    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [brandId, setBrandId] = useState('');
    const [colorId, setColorId] = useState('');
    const [sizeId, setSizeId] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [importPrice, setImportPrice] = useState('');
    const [exportPrice, setExportPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setUrlImg] = useState('');
    //
    useEffect(() => {
        console.log('dataModalGet', dataModalGet)
        setName(dataModalGet.name)
        setCategoryId(dataModalGet.categoryId)
        setBrandId(dataModalGet.brandId)
        setColorId(dataModalGet.colorId)
        setSizeId(dataModalGet.sizeId)
        setQuantity(dataModalGet.quantity)
        setImportPrice(dataModalGet.importPrice)
        setExportPrice(dataModalGet.exportPrice)
        setDescription(dataModalGet.description)
        setUrlImg(dataModalGet.imgUrl)
    }, [dataModalGet])
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
    let product_size = [];
    if (listSize) {
        product_size = listSize.map((item) => {
            return {
                label: item.size_number,
                value: item.id,
            };
        });
    }
    const product = {
        name: name,
        categoryId: categoryId,
        brandId: brandId,
        colorId: colorId,
        sizeId: sizeId,
        quantity: quantity,
        description: description,
        importPrice: importPrice,
        exportPrice: exportPrice,
        imgUrl: imgUrl
    };

    const handleOk = (e) => {
        console.log(product, 'các trường của product');
        onConfirm(e)
    };
    const handleCancel = () => {
        closeModal();
    };

    // upload ảnh
    const [fileList, setFileList] = useState([]);
    const changeImage = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        console.log(fileList, 'fileListtttt');
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
            destroyOnClose={true}
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
                        <Row>
                            <Col span={24}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }}>Tên {objectName}</span>}
                                    name="ProductName"
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
                                    <Input allowClear size='large'
                                        // placeholder={`Nhập tên ${objectName}`}
                                        defaultValue={name}
                                        value={name}
                                    // onChange={(e) => { setName(e.target.value) }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        {/* danh mục */}
                        <Row>
                            <Col span={24}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                }}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Danh mục</span>}
                                    name="category"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn tối thiểu 1 danh mục !',
                                        },
                                    ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                    <Select
                                        // mode="multiple"
                                        allowClear
                                        size='large'
                                        placeholder="Chọn danh mục"
                                        defaultValue={categoryId}
                                        onChange={(value) => setCategoryId(value)}
                                        style={{
                                            width: '100%',
                                        }}
                                        options={product_category}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        {/* thương hiệu và màu sắc */}
                        <Row gutter={20}
                            style={{
                                display: 'flex',
                                // border: '1px solid red',
                            }}>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                    // border: '1px solid green',
                                }}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Thương hiệu</span>}
                                    name="brand"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn 1 thương hiệu !',
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
                                        placeholder="Chọn thương hiệu"
                                        defaultValue={brandId}
                                        onChange={(value) => setBrandId(value)}
                                        style={{
                                            width: '100%',
                                        }}
                                        size='large'
                                        options={product_brand}>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Màu sắc</span>}
                                    name="color"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn 1 màu sắc !',
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
                                    <Select
                                        placeholder="Chọn màu sắc"
                                        defaultValue={colorId}
                                        onChange={(value) => setColorId(value)}
                                        style={{
                                            width: '100%',
                                        }}
                                        size='large'
                                        options={product_color}>
                                    </Select>
                                </Form.Item>
                            </Col>

                        </Row>
                        {/* size và số lượng */}
                        <Row gutter={20}
                            style={{
                                display: 'flex',
                                // border: '1px solid red',
                            }}>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin:"0 -20px"
                                    // border: '1px solid green',
                                }}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Size</span>}
                                    name="size"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn 1 size !',
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
                                        placeholder="Chọn size"
                                        defaultValue={sizeId}
                                        onChange={(value) => setSizeId(value)}
                                        style={{
                                            width: '100%',
                                        }}
                                        size='large'
                                        options={product_size}>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}>Số lượng</span>}
                                    name="quantity"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn số lượng !',
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
                                    <InputNumber size="large" min={1} max={100000} defaultValue={quantity} onChange={(value) => setQuantity(value)}
                                        style={{
                                            width: "100%"
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        {/* giá nhập và giá bán */}
                        <Row gutter={20}>
                            <Col span={12}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    width: '100%',
                                }}>Giá nhập</span>}
                                    name="importPrice"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập giá nhập !',
                                        },
                                    ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}>

                                    <Input allowClear size='large' placeholder="Nhập giá nhập dạng số "
                                        defaultValue={importPrice}
                                        onChange={(e) => setImportPrice(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}>Giá bán</span>}
                                    name="exportPrice"

                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập giá bán !',
                                        },
                                    ]}
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}>
                                    <Input allowClear size='large' placeholder="Nhập giá bán dạng số"
                                        defaultValue={exportPrice}
                                        onChange={(e) => setExportPrice(e.target.value)}
                                        style={{
                                            width: "100%",
                                        }}
                                    />
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
                                    <TextArea rows={4} allowClear maxLength={2000} showCount placeholder='Nhập mô tả...' onChange={(e) => setDescription(e.target.value)}
                                        style={{ resize: 'none', fontSize: "16px" }} defaultValue={description} />
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
                                    action={imgUrl}
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
