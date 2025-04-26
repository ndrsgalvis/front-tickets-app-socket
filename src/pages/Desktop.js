import { ArrowRightOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Button, Divider } from "antd";
import useHideMenu from "../hooks/useHideMenu";
import { useState } from "react";
import getUsersStorage from "../helpers/getUsersStorage";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const Desktop = () => {
  useHideMenu(false);
  const navigate = useNavigate();
  const [user] = useState(getUsersStorage());

  const exit = () => {
    localStorage.clear();
    navigate("/login");
  };

  const nextTicket = () => {
    console.log("Next ticket");
  };

  if (!user.agent || !user.desk) {
    navigate("/login");
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working on desks..</Text>
          <Text type="success">{user.desk}</Text>
        </Col>

        <Col span={4} align="right">
          <Button color="danger" variant="filled" onClick={exit}>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text> Currently working on ticket number : </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button color="primary" variant="filled" onClick={nextTicket}>
            Next ticket
            <ArrowRightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
