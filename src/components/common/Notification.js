import { notification } from "antd";
import * as NotificationTypes from "../../constant";
import {
  MessageOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
  // thông báo
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, placement) => {
    api[type]({
      message: `${placement} thành công !`,
      // description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

const openNotification = (message, type) => {
  let valueIcon;
  if (type === NotificationTypes.NOTIFICATION_SUCCESS) {
    valueIcon = (
      <CheckCircleOutlined style={{ fontSize: "16px", color: "Green" }} />
    );
  }
  if (type === NotificationTypes.NOTIFICATION_ERROR) {
    valueIcon = (
      <CloseCircleOutlined style={{ fontSize: "16px", color: "Red" }} />
    );
  }
  notification.open({
    message: message,
    duration: 2,
    icon: valueIcon,
  });
};
export { openNotification };


