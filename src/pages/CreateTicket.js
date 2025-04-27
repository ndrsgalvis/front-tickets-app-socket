import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button, Divider } from "antd";
import useHideMenu from "../hooks/useHideMenu";
import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";
const { Title, Text } = Typography;

const CreateTicket = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [lastTicket, setTicket] = useState({});

  const newTicket = () => {
    socket.emit("get-ticket", null, (ticket) => {
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Get new ticket</Title>
          <Text level={3}>Please touch the button to get a new ticket</Text>
          <Divider />
          <Text level={3}>Ticket number</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }} level={3}>
            {lastTicket.number ?? "No tickets"}
          </Text>
        </Col>
      </Row>

      <Row>
        <Col span={14} offset={6} align="center">
          <Button type="primary" onClick={newTicket} block>
            <DownloadOutlined />
            New ticket
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CreateTicket;
