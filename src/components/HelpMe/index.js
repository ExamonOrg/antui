import { RobotOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const HelpMe = ({ callBack }) => {
  return (
    <FloatButton
      icon={<RobotOutlined />}
      type="default"
      onClick={callBack}
      tooltip="AI Learning Assistance"
    />
  );
};

export default HelpMe;
