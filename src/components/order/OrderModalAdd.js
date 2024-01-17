import React, { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Form, Input, Modal, Col, Row, Select, Space, Table, Checkbox, InputNumber } from 'antd';

const objectName = 'hóa đơn'
const inputSize = 'medium'

export default function OrderModalAdd(props) {
    const { isOpen, closeModal, onConfirm, listProduct } = props;
    const { TextArea, Search } = Input;

    const [receiver_name, setReceiver_name] = useState('');
    const [order_status, setOrder_status] = useState('');
    const [receiver_phone, setReceiver_phone] = useState('');
    const [method, setMethod] = useState('');
    const [receiver_address, setReceiver_address] = useState('');
    const [ship_price, setShip_price] = useState(0);
    // const [order_price, setOrder_price] = useState(0);
    const [totalSP, setTotalSP] = useState(0);//tổng tiền sp
    const [total_price, setTotal_price] = useState(0);
    const [description, setDescription] = useState('');

    // const [listCart, setListCart] = useState([]);
    const [gioHang, setGioHang] = useState([]);
 
  const [soLuongSanPham, setSoLuongSanPham] = useState(0);
    const [componentHidden, setComponentHidden] = useState(false);

//
    const product = {
        receiver_name: receiver_name,
        // categoryId: categoryId,
        // brandId: brandId,
        // colorId: colorId,
        // sizeId: sizeId,
        // quantity: quantity,
        // description: description,
        // importPrice: importPrice,
        // exportPrice: exportPrice,
        // imgUrl: imgUrl
    };
//
    const paginationConfig = {
        pageSize: 3, // Số lượng hàng trên mỗi trang
    };

    //set hóa đơn
    const now = new Date();
    // Lấy thông tin về ngày, giờ và phút từ đối tượng Date
    const year = now.getFullYear(); // Lấy năm
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Lấy tháng (cần +1 vì tháng bắt đầu từ 0)
    const day = String(now.getDate()).padStart(2, '0'); // Lấy ngày
    const hours = String(now.getHours()).padStart(2, '0'); // Lấy giờ
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Lấy phút
    const seconds = String(now.getSeconds()).padStart(2, '0');// Lấy giây
    // Tạo chuỗi đại diện cho ngày giờ hiện tại
    const orderCode = `HD${year}${month}${day}${hours}${minutes}${seconds}`;
    // alert(orderCode)


    const handleOk = (e) => {
        console.log(product, 'các trường của product');
        // onConfirm(e)
    };
    const handleCancel = () => {
        closeModal();
    };
    const onSearch = (value, _e, info) => console.log(info?.source, value);

      ///------CậP nhật lại tổng giá trị sản phẩm khi thêm sản phẩm vào giỏ hàng
  // Khi gio? hang` thay doi? thi` update lai so san pham de tinh ship
  useEffect(() => {
    if (gioHang) {
      const totalTienSanPham = gioHang.reduce((accum, item) => {
        return accum + item.thanhTien;
      }, 0);
      const totalSoLuongSP = gioHang.reduce((accum, item) => {
        return accum + item.soLuong;
      }, 0);
      setTotalSP(totalTienSanPham);
      setSoLuongSanPham(totalSoLuongSP);
    }
  }, [gioHang]);
  //---------Cập nhật lại tổng giá trị của hoá đơn
  useEffect(() => {
    if (receiver_address.trim() !=='') {
        setShip_price(30000)
    }
    setTotal_price(ship_price + totalSP);
  }, [ship_price, totalSP]);

  ///////////////////  Các hàm xử lí   /////////
  const handleThemSanPhamVaoGioHang = (record) => {
    let gioHangUpdate = [...gioHang];
    let itemSelected = {
      max: record.quantity,
      id: record.id,
      product_name: record.product_name,
      soLuong: 1,
      export_price: record.export_price,
      totalTienSanPham: record.export_price,
    };

    const existingItemIndex = gioHangUpdate.findIndex(
      (ele) => ele.id === itemSelected.id
    );

    // Kiểm tra xem số lượng trong giỏ hàng đã vượt quá số lượng có sẵn trong bảng sản phẩm chưa
    if (
      existingItemIndex !== -1 &&
      gioHangUpdate[existingItemIndex].soLuong + 1 > record.soLuong
    ) {
      // Nếu đã vượt quá, không thêm vào giỏ hàng
      // Có thể hiển thị thông báo hoặc xử lý khác tùy thuộc vào yêu cầu
    //   Notification.openNotification(
    //     "Warning",
    //     "Số lượng sản phẩm đã vượt quá số lượng có thể bán",
    //     NotificationTypes.NOTIFICATION_WARNING
    //   );
      return;
    }

    if (record.soLuong === 0) {
      // Nếu số lượng trong bảng sản phẩm là 0, không thêm vào giỏ hàng
    //   Notification.openNotification(
    //     "Warning",
    //     "Số lượng sản phẩm sản phẩm là 0 không thể bán",
    //     NotificationTypes.NOTIFICATION_WARNING
    //   );
      return;
    }

    if (existingItemIndex !== -1) {
      gioHangUpdate[existingItemIndex] = {
        ...gioHangUpdate[existingItemIndex],
        soLuong: gioHangUpdate[existingItemIndex].soLuong + 1,
        thanhTien:
          (gioHangUpdate[existingItemIndex].soLuong + 1) *
          gioHangUpdate[existingItemIndex].giaBan,
      };
    } else {
      gioHangUpdate.push(itemSelected);
    }

    setGioHang(gioHangUpdate);
    setTotalSP(itemSelected.totalTienSanPham);
};
  const handleChangeSoLuongSanPham = (id, field, value) => {
    if(value===0){
      let gioHangUpdate = gioHang.filter(
        (item) => item.id !== id
      );
      setGioHang(gioHangUpdate);
    }else{
      const gioHangUpdate = gioHang.map((ele) => {
        if ((ele.id === id)) {
          return{
            ...ele,
            [field]:value,
            totalTienSanPham: value * ele.export_price,
          }
        }
        return ele;
      });
      setGioHang(gioHangUpdate)
    // setTotalSP(totalTienSanPham)

    }
   
  };
  const handleXoaSanPhamTrongGioHang = (record) => {
    let gioHangUpdate = gioHang.filter(
      (item) => item.id !== record.id
    );
    setGioHang(gioHangUpdate);
    // setTotalSP(totalTienSanPham)

  };
    const product_columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            width: '30px',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'product_name',
            key: 'product_name',
            // alignTitle: 'center',
        },
        {
            title: 'Số lượng',
            key: 'quantity',
            dataIndex: 'quantity',
            width: "50px"
        },
        {
            title: 'Giá bán',
            dataIndex: 'export_price',
            key: 'export_price',
            width: "150px"
        },
        {
            title: 'Hành động',
            key: 'action',
            width: '50px',
            labelAlign: 'center',
            render: (_, record) => (
                <Space size="middle" align='center'>
                    <a style={{ color: "blue" }}  onClick={() => {handleThemSanPhamVaoGioHang(record);}}><FontAwesomeIcon icon={faPlus} /> </a>
                </Space>
            ),
        },
    ];
    const cart_columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id  ',
            width: '30px',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'product_name',
            key: 'product_name',
            // alignTitle: 'center',
        },
        {
            title: 'Số lượng',
            key: 'amount',
            dataIndex: 'amount',
            width: "100px",
            render: (_, record) => (
                <InputNumber
                style={{
                    width:'100px',
                }}
                  value={record.soLuong}
                  min={0}
                  max={record.max}
                  onChange={(value) => {
                    handleChangeSoLuongSanPham(record.id, "soLuong", value);
                  }}
                />
              ),
        },
        {
            title: 'Giá bán',
            dataIndex: 'export_price',
            key: 'export_price',
            width: "100px"
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'totalTienSanPham',
            key: 'totalTienSanPham',
            width: '100px',
        },
        {
            title: 'Hành động',
            key: 'action',
            width: '95px',
            render: (_, record) => (
                <Space size="middle">
                    {/* <a style={{ color: "blue" }}><FontAwesomeIcon icon={faPenToSquare} onClick={() => checkUpdate(record)} /></a> */}
                    <a style={{ color: "red" }}><FontAwesomeIcon icon={faTrash}
                    onClick={() => {
                        handleXoaSanPhamTrongGioHang(record);
                      }}
                    /></a>
                </Space>
            ),
        },
    ];

    return (
        <Modal
            style={{
                marginLeft: "260px",
                marginRight: "20px",
                marginBottom: "-20px",
                marginTop: "-30px",
                // backgroundColor:"red",
            }}
            destroyOnClose={true}
            width={"100"}
            height={"100"}
            title={<h3 style={{
                marginTop: "-2px",
                marginBottom: "20px",
                fontWeight: "bold"
            }}>Thêm {objectName}</h3>} open={isOpen} onCancel={handleCancel}
            onOk={handleOk} >
            <Form
            // disabled={true}
            >
                <Row gutter={40}>
                    {/* trái */}
                    <Col span={12}>
                        <h4 style={{ fontWeight: "bold", margin: '0' }}>Thông tin khách hàng</h4>
                        <Row gutter={20}>
                        <Col span={24}
                                style={{
                                    // margin: "-10px 0"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        // margin: "-10px 0",

                                    }}>Tên khách hàng</span>}
                                    name="receiver_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Vui lòng nhập tên khách hàng!`,
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
                                    <Input allowClear size={inputSize} placeholder={`Nhập tên khách hàng`}
                                        // defaultValue={['a10', 'c12']}
                                        onChange={(e) => {
                                            setReceiver_name(e.target.value)
                                            // console.log(e.target.value)
                                        }}
                                        value={receiver_name}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        // margin: "-10px 0",

                                    }}>Trạng thái hóa đơn</span>}
                                    name="employee_id"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Vui lòng chọn trạng thái !`,
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
                                    <Select
                                        placeholder="Chọn trạng thái"
                                        // defaultValue={['a10', 'c12']}
                                        value={order_status}
                                        onChange={(value) => setOrder_status(value)}
                                        style={{
                                            width: '100%',
                                        }}
                                        size={inputSize}
                                        options={''}
                                    >
                                    </Select>
                                </Form.Item>
                            </Col>
                        
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    // margin: "-10px 0"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        // margin: "-10px 0",

                                    }}>Số điện thoại</span>}
                                    name="receiver_phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Vui lòng nhập số điện thoại !`,
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
                                    <Input allowClear size={inputSize} placeholder={`Nhập số điện thoại`}
                                        // defaultValue={['a10', 'c12']}
                                        onChange={(e) => setReceiver_phone(e.target.value)}
                                        value={receiver_phone}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    margin: "-20px 0"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        // margin: "-10px 0",

                                    }}>Phương thức thanh toán</span>}
                                    name="method_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Vui lòng chọn phương thức thanh toán`,
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
                                    <Select
                                        placeholder="Chọn phương thức thanh toán"
                                        // defaultValue={['a10', 'c12']}
                                        onChange={(value) => setMethod(value)}
                                        value={method}
                                        style={{
                                            width: '100%',
                                        }}
                                        size={inputSize}
                                        options={''}>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}
                                style={{
                                    // padding:"0 20px",
                                    margin: "30px 0 0 0",
                                }}>
                                <Checkbox
                                    checked={componentHidden}
                                    onChange={(e) => setComponentHidden(e.target.checked)}
                                >
                                    Giao hàng từ xa
                                </Checkbox>
                            </Col>
                        </Row>
                        {/* danh mục */}
                        <Row gutter={20} style={{ display: componentHidden ? 'flex' : 'none' }}>
                            <Col span={24}
                                style={{
                                    // padding:"0 20px",
                                    // margin: "0 0 -10px 0"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        margin: "0 0 -10px 0",

                                    }}>Chi tiết địa chỉ</span>}
                                    name="receiver_address"
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
                                    <Input allowClear size={inputSize} placeholder={`Số nhà/ngõ/ngách hoặc vị trí dễ xác định...`}
                                        value={receiver_address}
                                        onChange={(e) => setReceiver_address(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}
                                style={{
                                    // padding:"0 20px",
                                    margin: "-20px 0"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        margin: "0 0 -10px 0",

                                    }}>Phí giao hàng</span>}
                                    name="ship_price"
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
                                    <Input size={inputSize}
                                        addonAfter="VNĐ" readOnly
                                        // disabled
                                        // suffix={'VND'}
                                        onChange={(e) => {
                                   
                                            setReceiver_address(e.target.value)
                                            if (receiver_address.trim()!=='') {
                                                setShip_price(30000)
                                            }
                                        }}
                                        // defaultValue={ship_price}
                                        value={ship_price}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        {/* mô tả và tổng tiền */}
                        <Row>
                            <Col span={24}
                                style={{
                                    // padding:"0 20px",
                                    // margin: "-10px 0"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        margin: "0 0 -20px 0",

                                    }}>Tổng tiền sản phẩm</span>}
                                    name="order_price"
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
                                    <Input size={inputSize}
                                        value={totalSP}
                                        // defaultValue={totalSP}
                                        disabled
                                        suffix={'VND'}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}
                                style={{
                                    // padding:"0 20px",
                                    margin: "-10px 0 -20px 0"
                                }}>
                                <Form.Item
                                    label={<span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        margin: "0 0 -10px 0",

                                    }}>Tổng tiền hóa đơn</span>}
                                    name="order_price"
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
                                    <Input size={inputSize}
                                        // value={'tiền hóa đơn ở đây'}
                                        // defaultValue={['a10', 'c12']}
                                        disabled
                                        suffix={'VND'}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label={<span style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    margin: "0 0 -10px 0",

                                }}>Mô tả</span>}
                                    name="description"
                                    labelCol={{
                                        span: 24,
                                    }}
                                    labelAlign='left'
                                    wrapperCol={{
                                        span: 24,
                                    }}>
                                    <TextArea rows={3} allowClear maxLength={2000} showCount placeholder='Nhập mô tả...' onChange={(e) => console.log(e.target.value)}
                                        style={{ resize: 'none', fontSize: "16px" }} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    {/* phải */}
                    <Col span={12}>
                        <Row>
                        <div style={{ display: 'flex', justifyContent: "space-between", width:"100%" }}>
                            <h4 style={{ fontWeight: "bold" }}>Danh sách sản phẩm</h4>
                            <Search placeholder="Nhập tên sản phẩm" allowClear enterButton="Search" size="large" onSearch={onSearch}
                                style={{
                                    width: "400px",
                                    marginBottom: '20px',
                                }}
                            />
                        </div>
                            <Table columns={product_columns} dataSource={listProduct} pagination={paginationConfig}
                                style={{ width: "100%" ,
                                //  pointerEvents: 'none',
                                // opacity: 0.6
                                }}/>
                        </Row>
                        <Row style={{ marginTop:"-10px" }}>
                        <h4 style={{ fontWeight: "bold" }}>Giỏ hàng</h4>
                            <Table columns={cart_columns} pagination={paginationConfig} style={{ width: "100%" }}
                                dataSource={gioHang.map((item, index) => {
                                    return {
                                        ...item,
                                        key: index,
                                        stt: index + 1,
                                    };
                                })} />
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}