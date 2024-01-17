import React, { useState } from 'react';
import LineChartComponent from './LineChartComponent'
import PieChartComponent from './PieChartComponent'
import ColumnChartComponent from './ColumnChartComponent'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faClipboardList, faUserTie, faShoePrints, faTriangleExclamation, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import "../../styles/css/dashboard/theme.css";
import CommonHeader from '../common/Header';
// import CommonFooter from '../common/Footer';
// import { Menu, theme, Button, Layout, Space, Table, Tag, Input } from 'antd';
import { Form, Menu, theme, Button, Layout, Space, Table, Tag, Input, Modal, Select, notification, Col, Row, Radio } from 'antd';
const { Content } = Layout;
const title = "Trang chủ"

export default function HomeComponent({ }) {
    const [revenue, setRevenue] = useState(1);
    const optionsRevenue = [
        {
            label: 'Tuần',
            value: '1',
        },
        {
            label: 'Tháng',
            value: '2',
        },
        {
            label: 'Năm',
            value: '3',
        },
    ];

    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
            {
                label: 'Sample Bar Chart',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(0,0,0,1)',
                data: [65, 59, 80, 81, 56],
            },
        ],
    };
    //set ngày
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

    //button chọn thống kê
    const changeRevenue = ({ target: { value } }) => {
        console.log('revenue checked', value);
        setRevenue(value);
        alert(value);
    };

    const options = {
        // Custom options for the bar chart
        // For example: scales, title, etc.
    };
    return (

        <Layout className="layout"
            style={{
                height: "100%"
            }}>
            <CommonHeader title={title} />
            <Content style={{ padding: "0 40px" }}>
                <h2 style={{ marginBottom: "40px", color: "green", textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>Thống kê tháng : {month}/{year}</h2>
                <Row gutter={20} style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Col span={16}>
                        <Row gutter={20}>
                            <Col span={12}>
                                <section className="card card-featured-left card-featured-primary mb-3">
                                    <div className="card-body">
                                        <div className="widget-summary">
                                            <div className="widget-summary-col widget-summary-col-icon">
                                                <div className="summary-icon" style={{ backgroundColor: "rgb(230, 200, 0)" }}>
                                                    <FontAwesomeIcon icon={faCoins} />                                               </div>
                                            </div>
                                            <div className="widget-summary-col">
                                                <div className="summary">
                                                    <h4 className="title">Doanh thu</h4>
                                                    <div className="info" style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "flex-end",
                                                    }}>
                                                        <h1 style={{ margin: "0 10px 0 0", padding: "0", color: "rgb(48,252,102)", fontWeight: "bold" }}>200000000</h1><h3 style={{ margin: "0", padding: "0" }}> VND</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Col>
                            <Col span={12}>
                                <section className="card card-featured-left card-featured-secondary">
                                    <div className="card-body">
                                        <div className="widget-summary">
                                            <div className="widget-summary-col widget-summary-col-icon">
                                                <div className="summary-icon" style={{ backgroundColor: "rgb(25, 135, 84)" }}>
                                                    <FontAwesomeIcon icon={faShopify} />
                                                    <i className="fas fa-mail-bulk"></i>
                                                </div>
                                            </div>
                                            <div className="widget-summary-col">
                                                <div className="summary">
                                                    <h4 className="title">Sản phẩm bán chạy</h4>
                                                    <div className="info">
                                                        <strong className="hot-product" id="product-count">Nike Air Force One</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Col>
                            <Col span={12}>
                                <section className="card card-featured-left card-featured-tertiary mb-3">
                                    <div className="card-body">
                                        <div className="widget-summary">
                                            <div className="widget-summary-col widget-summary-col-icon">
                                                <div className="summary-icon " style={{ backgroundColor: "rgb(220, 53, 69)" }}>
                                                    <FontAwesomeIcon icon={faTriangleExclamation} />                                               </div>
                                            </div>
                                            <div className="widget-summary-col">
                                                <div className="summary">
                                                    <h4 className="title">Số lượng SP sắp hết hàng</h4>
                                                    <div className="info">
                                                        <strong className="amount" id="product-count">2</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Col>
                            <Col span={12}>
                                <section className="card card-featured-left card-featured-quaternary">
                                    <div className="card-body">
                                        <div className="widget-summary">
                                            <div className="widget-summary-col widget-summary-col-icon">
                                                <div className="summary-icon" style={{ backgroundColor: "rgb(13, 202, 240)" }}>
                                                    <FontAwesomeIcon icon={faUserTie} />                                                </div>
                                            </div>
                                            <div className="widget-summary-col">
                                                <div className="summary">
                                                    <h4 className="title">Tổng số nhân viên</h4>
                                                    <div className="info">
                                                        <strong className="amount" id="product-count">2</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <h3 style={{ margin: "0px", color: "rgb(205,0,255)", textAlign: "center", fontWeight: "bold" }}>Thống kê hóa đơn</h3>
                        <PieChartComponent />
                    </Col>
                </Row>
                <Row gutter={30}>
                    <Col span={12}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: "white",
                            borderRadius: "20px",
                            // border: "2px solid yellow"
                            // margin:"0 20px"
                        }}>
                        <div style={{
                            padding: "20px",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                                <h3
                                    style={{
                                        margin: "0",
                                        padding: "0",
                                        // border: "2px solid blue"
                                    }}>Thống kê doanh thu và lợi nhuận</h3>
                                <Radio.Group options={optionsRevenue} onChange={changeRevenue} value={revenue} optionType="button" />
                            </div>
                            <ColumnChartComponent />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            // border: "2px solid red"
                            backgroundColor: "white",
                            borderRadius: "20px",
                            padding: "20px",
                        }}>
                            <h3
                                style={{
                                    marginBottom: "20px",
                                    // border: "2px solid blue"
                                }}>Top 5 sản phẩm bán chạy nhất trong tháng</h3>
                            <div style={{
                                height: '450px',
                            }}>
                                <LineChartComponent />
                            </div>
                        </div>

                    </Col>

                </Row>
            </Content>
            {/* <CommonFooter /> */}
        </Layout>
    );
};