import { useNavigate } from "react-router-dom";
import { SaveOutlined } from "@ant-design/icons";
import { Button, Typography, Form, Input, InputNumber, Divider } from "antd";
import useHideMenu from "../hooks/useHideMenu";
import getUsersStorage from "../helpers/getUsersStorage";
import { useState } from "react";

const { Title, Text } = Typography;

const Loging = () => {
  const [user] = useState(getUsersStorage());

  useHideMenu(false);
  const navigate = useNavigate();
  const onFinish = ({ agentname, desktop }) => {
    localStorage.setItem("agent", agentname);
    localStorage.setItem("desk", desktop);
    navigate("/desktop");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (user.agent && user.desk) {
    navigate("/desktop");
  }

  return (
    <>
      <Title level={2}> Ingresar</Title>
      <Text> Please write an agent name and desktop number.</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agent name:"
          name="agentname"
          rules={[{ required: true, message: "Please input an agent name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="desktop"
          name="desktop"
          rules={[{ required: true, message: "Please input a desktop!" }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            <SaveOutlined />
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Loging;
