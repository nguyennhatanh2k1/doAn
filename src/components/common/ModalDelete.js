import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';

export default function ModalDelete({ isOpen, closeModal, onConfirm, data, objectName }) {
    // console.log(data, "data modal xóaaaaaa");
    const handleOk = (e) => {
        onConfirm(data)
    };
    const handleCancel = () => {
        closeModal();
    };
    return (
        <Modal title={<h3 style={{
            marginTop: "-1px",
            marginBottom: "30px",
            fontWeight: "bold"
        }}>Xóa {objectName}</h3>}
            open={isOpen} onCancel={handleCancel} onOk={handleOk}>
            <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faTriangleExclamation} style={{ display: "block", margin: "0 10px", color: "#FF4D4F", fontSize: "36px" }} />
                <h3 style={{ margin: "0" }}>Bạn có chắc chắn muốn xóa {objectName} này không ?</h3>
            </div>
        </Modal>
    )
}
